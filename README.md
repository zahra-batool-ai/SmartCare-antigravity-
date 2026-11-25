# SmartCare - Hospital Management Web Application

**SmartCare** is a modern, professional, and fully functional hospital management web application designed to help small to medium-sized hospitals and healthcare clinics streamline their daily administrative activities and outpatient workflows.

Built with **HTML5, CSS3, and JavaScript**, SmartCare operates 100% locally and offline using the browser's **Local Storage** with zero external paid APIs, no Supabase, no Firebase, and no API keys required.

---

## 🌟 Key Features

### 1. Admin Dashboard
- **Live Statistics Cards**: Real-time counts of total registered patients, medical staff/doctors, today's appointments, and pending consultations.
- **Quick Actions Bar**: Fast shortcuts for patient registration, appointment booking, queue token dispensing, and medical record documentation.
- **Live Outpatient Queue Widget**: Real-time counter of waiting vs. consulting patients with calling banner and synthesized chime.
- **Today's Appointments Schedule**: Full table of appointments booked for the current date with status indicators.
- **Recent System Activity Feed**: Chronological log of recent hospital admissions, queue movements, and clinical encounters.
- **Available Doctors Widget**: Overview of physicians on duty and their consultation room allocations.

### 2. Patient Management
- **Registration Form**: Captures patient name, age, gender, phone number, blood group, emergency contact details, residential address, and known allergies.
- **Automatic & Custom Patient IDs**: Auto-generates IDs (e.g. `SC-1011`) with duplicate ID prevention validation.
- **Live Patient Search**: Real-time filtering by Patient Name, ID, or Phone Number, plus gender filter.
- **Comprehensive Patient Profile Modal**: Displays demographics, full appointment history, and medical visit timeline with prescribed medications and vital signs.
- **Edit & Delete Records**: Update existing patient details or delete records with safety confirmation modals.

### 3. Doctor Management
- **Medical Personnel Directory**: Displays doctors categorized by specialty and department.
- **Add Doctor Form**: Add physicians with name, specialization, department, consulting room, schedule, contact phone, and status.
- **Specialty & Department Filtering**: Live search and dropdown filters by department.
- **Appointment Load Tracking**: Displays the count of assigned appointments for each doctor.
- **Edit & Delete Roster**: Modify doctor details or remove doctors with confirmation dialogs.

### 4. Appointment Management
- **Schedule Appointments**: Link appointments to existing registered patients and attending physicians.
- **Date & Time Picker**: Standardized date and time slot pickers (morning & afternoon consultation slots).
- **Status Management**: Instantly transition appointments through *Scheduled*, *Confirmed*, *In Progress*, *Completed*, or *Cancelled*.
- **Auto Queue Check-in**: Option to automatically issue an outpatient queue token for appointments scheduled on the current day.
- **Appointment Slips**: One-click printable hospital appointment slips formatted with patient details, barcode styling, and clinic info.
- **Filtering**: Filter appointments by Date (All, Today, Upcoming, Past), Status, and Attending Doctor.

### 5. Live Patient Queue
- **Visual Calling Board**: Hero banner displaying the active token number, patient name, attending doctor, and consultation room.
- **Offline Audio Chime**: Synthesized hospital announcement chime powered by the Web Audio API (100% offline, zero audio files or network requests required).
- **Queue Progression**: "Call Next Patient", "Mark Consultation Done", "Reopen Token", or "Dismiss from Line".
- **Token Dispenser**: Issue queue tokens directly for walk-in patients or booked appointments.
- **Queue Breakdown**: Real-time counts of patients waiting in line, currently consulting, and served today.

### 6. Medical Visit Records
- **Clinical Encounter Documentation**: Record vital signs (Blood Pressure, Heart Rate, Temperature, Weight), presenting symptoms, clinical diagnoses, and lifestyle advice.
- **Prescription Manager**: Dynamic multi-item prescription table (Medication name, Dosage, Frequency, Duration).
- **Patient History Linking**: Every clinical record links directly into the patient's master record.
- **Official Prescription & Summary Print**: Generates formatted clinical visit summaries and prescriptions with physician signature areas ready for printing.

### 7. Data Persistence & Tools
- **Browser LocalStorage**: Automatically persists all edits, registrations, and status changes locally.
- **Reset to Demo Data**: Easily restore realistic, curated demonstration data with one click.
- **Export Backup (JSON)**: Download a complete timestamped backup file of your hospital database.
- **Import Backup (JSON)**: Restore a previous hospital database backup file with verification.

---

## 🎨 Design & Aesthetic

- **Medical Color Palette**: Crisp clinical white (`#FFFFFF`) background with deep navy blue (`#0F2B48`, `#1A365D`) and vibrant medical cyan/light blue (`#0284C7`, `#0EA5E9`, `#E0F2FE`) accents.
- **Responsive Layout**: Desktop sidebar navigation with mobile collapsible slide-out drawer.
- **Crisp Vector Icons**: Embedded zero-dependency SVG icon system for rapid loading and zero CDN reliance.
- **Accessible Typography**: High contrast, legible typography optimized for clinical and administrative environments.

---

## 🚀 How to Run SmartCare Locally

SmartCare is completely self-contained and does not require Node.js, npm, Python, or any build step.

### Method 1: Direct Browser Launch (Simplest)
1. Navigate to the project folder:
   `c:\Users\AL-SAEED\OneDrive\Documents\SmartCare`
2. Double-click `index.html` to open it in Google Chrome, Microsoft Edge, Mozilla Firefox, or any modern web browser.
3. Everything works immediately!

### Method 2: Local Python HTTP Server
If you prefer running via a local server:
1. Open PowerShell or Terminal in the project directory:
   ```powershell
   cd "c:\Users\AL-SAEED\OneDrive\Documents\SmartCare"
   ```
2. Start Python's built-in HTTP server:
   ```powershell
   python -m http.server 8080
   ```
3. Open your browser and navigate to:
   [http://localhost:8080](http://localhost:8080)

### Method 3: VS Code / Live Server
1. Open the `SmartCare` folder in VS Code.
2. Click **"Go Live"** in the bottom status bar (if Live Server extension is installed) or right-click `index.html` and select **"Open with Live Server"**.

---

## 📁 File Structure

```
SmartCare/
├── index.html              # Main application shell with sidebar, header, and containers
├── README.md               # Documentation and local launch guide
├── css/
│   ├── main.css            # Design tokens, variables (navy & light blue), resets, utilities
│   ├── layout.css          # Sidebar navigation, header bar, responsive mobile drawer
│   ├── components.css      # Buttons, cards, stat cards, forms, tables, badges, modals, toasts
│   └── views.css           # Dashboard, patients directory, doctor cards, queue board, medical records
└── js/
    ├── icons.js            # Standalone SVG icon library (offline, zero external requests)
    ├── storage.js          # LocalStorage CRUD operations, demo data seeder, export/import
    ├── notifications.js    # Toast notifications, modal confirmations, Web Audio chime synthesizer
    ├── views/
    │   ├── dashboard.js    # Admin dashboard: metrics, recent activity, quick actions
    │   ├── patients.js     # Patient registration, validation, search, profile & history modal
    │   ├── doctors.js      # Doctor directory, add/edit/delete, specialty & department filters
    │   ├── appointments.js # Booking, status updates, date/doctor filters, appointment slips
    │   ├── queue.js        # Outpatient queue board, token calling, chime alert, status updates
    │   └── medical.js      # Clinical visit documentation, vitals, prescriptions, print slips
    └── app.js              # Application routing, view switcher, clock, badge sync, backup logic
```

---

## 🧪 Demonstration Data
On first launch, SmartCare automatically seeds a realistic hospital database including:
- **10 Patients**: Different age groups, blood types, emergency contacts, and allergy alerts.
- **6 Specialized Doctors**: Cardiology, General Medicine (OPD), Pediatrics, Orthopedics, Neurology, and Dermatology.
- **Appointments**: Pre-configured appointments for today, tomorrow, and upcoming days with different statuses.
- **Live Outpatient Queue**: Active tokens in consultation, waiting in line, and completed.
- **Medical Visit Records**: Complete clinical encounter notes with vitals, diagnoses, and multi-item prescriptions.
- **Activity Log**: Event history for the hospital dashboard.

You can click **"Reset Demo Data"** at any time to restore this initial state.
