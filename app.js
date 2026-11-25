// SmartCare Hospital Management System - Main Application Orchestrator

class App {
  constructor() {
    this.currentView = 'dashboard';
    this.viewContainer = document.getElementById('view-content');
    this.views = {
      dashboard: window.DashboardView,
      patients: window.PatientsView,
      doctors: window.DoctorsView,
      appointments: window.AppointmentsView,
      queue: window.QueueView,
      medical: window.MedicalView
    };
  }

  init() {
    this.setupIcons();
    this.startClock();
    this.bindNavigation();
    this.bindHeaderActions();
    this.setupMobileMenu();
    this.updateBadges();

    // Listen for storage updates
    window.addEventListener('smartcare:datachanged', () => {
      this.updateBadges();
    });

    // Check URL hash if present
    const hash = window.location.hash.replace('#', '');
    if (hash && this.views[hash]) {
      this.navigateTo(hash);
    } else {
      this.navigateTo('dashboard');
    }
  }

  setupIcons() {
    // Inject sidebar icons
    const iconMap = {
      'nav-icon-dashboard': 'dashboard',
      'nav-icon-patients': 'patients',
      'nav-icon-doctors': 'doctors',
      'nav-icon-appointments': 'calendar',
      'nav-icon-queue': 'queue',
      'nav-icon-medical': 'medicalRecords',
      'icon-export-btn': 'download',
      'icon-import-btn': 'upload',
      'icon-reset-btn': 'rotateCcw'
    };

    for (const [id, iconName] of Object.entries(iconMap)) {
      const el = document.getElementById(id);
      if (el) {
        el.innerHTML = Icons.get(iconName, 'icon-sm');
      }
    }
  }

  startClock() {
    const updateTime = () => {
      const now = new Date();
      const dateEl = document.getElementById('clock-date');
      const timeEl = document.getElementById('clock-time');

      if (dateEl && timeEl) {
        dateEl.textContent = now.toLocaleDateString(undefined, {
          weekday: 'short',
          month: 'short',
          day: 'numeric'
        });
        timeEl.textContent = now.toLocaleTimeString(undefined, {
          hour: '2-digit',
          minute: '2-digit'
        });
      }
    };

    updateTime();
    setInterval(updateTime, 1000);
  }

  bindNavigation() {
    document.querySelectorAll('.sidebar-nav .nav-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const viewName = item.dataset.view;
        if (viewName) {
          this.navigateTo(viewName);
          this.closeMobileSidebar();
        }
      });
    });

    const brandBtn = document.getElementById('brand-logo-btn');
    if (brandBtn) {
      brandBtn.addEventListener('click', () => {
        this.navigateTo('dashboard');
        this.closeMobileSidebar();
      });
    }

    // Browser back/forward navigation support
    window.addEventListener('popstate', (e) => {
      const hash = window.location.hash.replace('#', '');
      if (hash && this.views[hash]) {
        this.renderView(hash, false);
      }
    });
  }

  navigateTo(viewName) {
    if (!this.views[viewName]) viewName = 'dashboard';
    window.location.hash = viewName;
    this.renderView(viewName, true);
  }

  renderView(viewName, updateHistory = true) {
    this.currentView = viewName;

    // Update active nav link
    document.querySelectorAll('.sidebar-nav .nav-item').forEach(item => {
      if (item.dataset.view === viewName) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Render corresponding view component
    const view = this.views[viewName];
    if (view && typeof view.render === 'function') {
      this.viewContainer.innerHTML = '';
      view.render(this.viewContainer);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.updateBadges();
  }

  updateBadges() {
    const db = window.smartStorage.getDB();
    const today = new Date().toISOString().split('T')[0];

    const badgePatients = document.getElementById('badge-nav-patients');
    if (badgePatients) badgePatients.textContent = db.patients.length;

    const badgeDoctors = document.getElementById('badge-nav-doctors');
    if (badgeDoctors) badgeDoctors.textContent = db.doctors.length;

    const pendingApts = db.appointments.filter(a => a.status === 'Scheduled' || a.status === 'Confirmed').length;
    const badgeAppointments = document.getElementById('badge-nav-appointments');
    if (badgeAppointments) badgeAppointments.textContent = pendingApts;

    const waitingQueue = db.queue.filter(q => q.status === 'waiting').length;
    const badgeQueue = document.getElementById('badge-nav-queue');
    if (badgeQueue) badgeQueue.textContent = waitingQueue;

    const badgeMedical = document.getElementById('badge-nav-medical');
    if (badgeMedical) badgeMedical.textContent = db.medicalRecords.length;
  }

  bindHeaderActions() {
    // Export Backup JSON
    const btnExport = document.getElementById('btn-export-backup');
    if (btnExport) {
      btnExport.addEventListener('click', () => {
        window.smartStorage.exportDatabase();
        window.Notifications.success('SmartCare database exported successfully!');
      });
    }

    // Import Backup JSON
    const btnImport = document.getElementById('btn-import-backup');
    const fileInput = document.getElementById('import-db-file');

    if (btnImport && fileInput) {
      btnImport.addEventListener('click', () => {
        fileInput.value = '';
        fileInput.click();
      });

      fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            window.smartStorage.importDatabase(event.target.result);
            window.Notifications.success('Hospital database restored successfully!');
            this.navigateTo(this.currentView);
          } catch (err) {
            window.Notifications.error(err.message);
          }
        };
        reader.readAsText(file);
      });
    }

    // Global Reset Demo Data
    const btnReset = document.getElementById('btn-global-reset');
    if (btnReset) {
      btnReset.addEventListener('click', () => {
        window.Notifications.confirm({
          title: 'Reset to Factory Demonstration Data?',
          message: 'This will restore all records (patients, doctors, appointments, queue, and medical visits) to factory demonstration defaults. Any custom entries will be reset.',
          confirmText: 'Reset Hospital Data',
          isDanger: true,
          onConfirm: () => {
            window.smartStorage.resetToDemoData();
            window.Notifications.success('System reset to demo data successfully!');
            this.navigateTo(this.currentView);
          }
        });
      });
    }
  }

  setupMobileMenu() {
    const btnMobile = document.getElementById('btn-mobile-menu');
    const sidebar = document.getElementById('app-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');

    if (btnMobile && sidebar && backdrop) {
      btnMobile.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar-open');
        backdrop.classList.toggle('active');
      });

      backdrop.addEventListener('click', () => {
        this.closeMobileSidebar();
      });
    }
  }

  closeMobileSidebar() {
    const sidebar = document.getElementById('app-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (sidebar) sidebar.classList.remove('sidebar-open');
    if (backdrop) backdrop.classList.remove('active');
  }
}

// Instantiate and launch SmartCare
document.addEventListener('DOMContentLoaded', () => {
  window.app = new App();
  window.app.init();
});
