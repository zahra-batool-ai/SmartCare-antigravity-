// SmartCare Hospital Management System - Toast Notifications & Modal Dialogs
// Includes offline Web Audio synthesizer for patient queue announcements

const Notifications = {
  container: null,

  init() {
    if (!this.container) {
      let el = document.getElementById('toast-container');
      if (!el) {
        el = document.createElement('div');
        el.id = 'toast-container';
        el.className = 'toast-container';
        document.body.appendChild(el);
      }
      this.container = el;
    }
  },

  show(message, type = 'info', duration = 3500) {
    this.init();

    const toast = document.createElement('div');
    toast.className = `toast toast-${type} animate-slide-in`;

    const iconMap = {
      success: Icons.get('checkCircle', 'toast-icon', 20),
      error: Icons.get('alertTriangle', 'toast-icon', 20),
      warning: Icons.get('alertTriangle', 'toast-icon', 20),
      info: Icons.get('info', 'toast-icon', 20)
    };

    toast.innerHTML = `
      <div class="toast-content">
        <span class="toast-icon-wrap">${iconMap[type] || iconMap.info}</span>
        <span class="toast-message">${message}</span>
      </div>
      <button class="toast-close" aria-label="Close">&times;</button>
    `;

    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => {
      this.dismiss(toast);
    });

    this.container.appendChild(toast);

    if (duration > 0) {
      setTimeout(() => {
        this.dismiss(toast);
      }, duration);
    }

    return toast;
  },

  dismiss(toast) {
    if (!toast || toast.classList.contains('dismissing')) return;
    toast.classList.add('dismissing');
    toast.style.animation = 'toastFadeOut 0.25s forwards';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 250);
  },

  success(msg, duration) { return this.show(msg, 'success', duration); },
  error(msg, duration) { return this.show(msg, 'error', duration || 4500); },
  warning(msg, duration) { return this.show(msg, 'warning', duration); },
  info(msg, duration) { return this.show(msg, 'info', duration); },

  // Confirmation modal dialog
  confirm({
    title = 'Confirm Action',
    message = 'Are you sure you want to proceed?',
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    isDanger = false,
    onConfirm = () => {},
    onCancel = () => {}
  }) {
    // Remove existing if any
    const existingModal = document.getElementById('confirm-modal-overlay');
    if (existingModal) existingModal.remove();

    const overlay = document.createElement('div');
    overlay.id = 'confirm-modal-overlay';
    overlay.className = 'modal-overlay animate-fade-in';

    overlay.innerHTML = `
      <div class="modal-dialog modal-sm" role="dialog" aria-modal="true">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <span class="modal-icon ${isDanger ? 'text-danger' : 'text-primary'}">
              ${Icons.get(isDanger ? 'alertTriangle' : 'info', 'icon', 22)}
            </span>
            <h3 class="modal-title">${title}</h3>
          </div>
          <button type="button" class="btn-close" id="btn-confirm-cancel-x">&times;</button>
        </div>
        <div class="modal-body">
          <p class="modal-text">${message}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" id="btn-confirm-cancel">${cancelText}</button>
          <button type="button" class="btn ${isDanger ? 'btn-danger' : 'btn-primary'}" id="btn-confirm-proceed">${confirmText}</button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    const cleanup = () => {
      overlay.classList.add('fade-out');
      setTimeout(() => overlay.remove(), 200);
    };

    overlay.querySelector('#btn-confirm-cancel').addEventListener('click', () => {
      cleanup();
      onCancel();
    });
    overlay.querySelector('#btn-confirm-cancel-x').addEventListener('click', () => {
      cleanup();
      onCancel();
    });
    overlay.querySelector('#btn-confirm-proceed').addEventListener('click', () => {
      cleanup();
      onConfirm();
    });

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        cleanup();
        onCancel();
      }
    });
  },

  // Synthesized Hospital Chime / Ding-Dong for Queue Call (100% offline Web Audio API)
  playChime() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      // Note 1: High chime (e.g. F5 698.46 Hz)
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(659.25, ctx.currentTime); // E5
      gain1.gain.setValueAtTime(0.2, ctx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(ctx.currentTime);
      osc1.stop(ctx.currentTime + 0.6);

      // Note 2: Harmonious lower chime (e.g. C5 523.25 Hz)
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(523.25, ctx.currentTime + 0.25); // C5
      gain2.gain.setValueAtTime(0.25, ctx.currentTime + 0.25);
      gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.9);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(ctx.currentTime + 0.25);
      osc2.stop(ctx.currentTime + 0.9);
    } catch (e) {
      console.log('Audio playback info:', e);
    }
  }
};

window.Notifications = Notifications;
