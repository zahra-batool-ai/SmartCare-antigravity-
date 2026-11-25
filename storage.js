// SmartCare Hospital Management System - Data Storage Layer
// Manages local storage persistence, demonstration data seeding, and CRUD operations

const STORAGE_KEY = 'smartcare_hms_database_v1';

function getTodayStr(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().split('T')[0];
}

function getInitialSeedData() {
  const today = getTodayStr(0);
  const yesterday = getTodayStr(-1);
  const tomorrow = getTodayStr(1);
  const inTwoDays = getTodayStr(2);
  const inThreeDays = getTodayStr(3);

  const doctors = [
    {
      id: 'DOC-101',
      name: 'Dr. Sarah Mitchell',
      specialization: 'Cardiology',
      department: 'Cardiology & Heart Center',
      phone: '+1 (555) 234-5671',
      email: 's.mitchell@smartcare.hospital',
      room: 'Room 302, 3rd Floor',
      schedule: 'Mon - Fri (09:00 AM - 03:00 PM)',
      status: 'Active',
      experience: '14 years'
    },
    {
      id: 'DOC-102',
      name: 'Dr. David Al-Mansoor',
      specialization: 'General Medicine',
      department: 'Outpatient Department (OPD)',
      phone: '+1 (555) 345-6782',
      email: 'd.mansoor@smartcare.hospital',
      room: 'Room 105, 1st Floor',
      schedule: 'Mon - Sat (08:30 AM - 02:00 PM)',
      status: 'Active',
      experience: '18 years'
    },
    {
      id: 'DOC-103',
      name: 'Dr. Elena Rostova',
      specialization: 'Pediatrics',
      department: 'Pediatrics & Child Care',
      phone: '+1 (555) 456-7893',
      email: 'e.rostova@smartcare.hospital',
      room: 'Room 210, 2nd Floor',
      schedule: 'Mon - Fri (10:00 AM - 04:00 PM)',
      status: 'Active',
      experience: '11 years'
    },
    {
      id: 'DOC-104',
      name: 'Dr. Marcus Vance',
      specialization: 'Orthopedics',
      department: 'Orthopedic Surgery & Trauma',
      phone: '+1 (555) 567-8904',
      email: 'm.vance@smartcare.hospital',
      room: 'Room 401, 4th Floor',
      schedule: 'Tue - Sat (09:00 AM - 03:30 PM)',
      status: 'Active',
      experience: '16 years'
    },
    {
      id: 'DOC-105',
      name: 'Dr. Priya Sharma',
      specialization: 'Neurology',
      department: 'Neurosciences',
      phone: '+1 (555) 678-9015',
      email: 'p.sharma@smartcare.hospital',
      room: 'Room 312, 3rd Floor',
      schedule: 'Mon, Wed, Fri (09:30 AM - 02:30 PM)',
      status: 'Active',
      experience: '12 years'
    },
    {
      id: 'DOC-106',
      name: 'Dr. Robert Chen',
      specialization: 'Dermatology',
      department: 'Dermatology Clinic',
      phone: '+1 (555) 789-0126',
      email: 'r.chen@smartcare.hospital',
      room: 'Room 118, 1st Floor',
      schedule: 'Tue, Thu, Sat (10:00 AM - 05:00 PM)',
      status: 'Active',
      experience: '9 years'
    }
  ];

  const patients = [
    {
      id: 'SC-1001',
      name: 'Eleanor Campbell',
      age: 48,
      gender: 'Female',
      phone: '+1 (555) 801-4412',
      bloodGroup: 'O+',
      emergencyContact: 'John Campbell (Spouse) - +1 (555) 801-4413',
      address: '742 Evergreen Terrace, Springfield',
      allergies: 'Penicillin, Latex',
      registeredDate: '2026-01-15'
    },
    {
      id: 'SC-1002',
      name: 'Arthur Pendelton',
      age: 62,
      gender: 'Male',
      phone: '+1 (555) 912-3321',
      bloodGroup: 'A+',
      emergencyContact: 'Clara Pendelton (Daughter) - +1 (555) 912-3322',
      address: '12 Oak Ridge Road, Riverdale',
      allergies: 'Sulfa Drugs',
      registeredDate: '2026-02-10'
    },
    {
      id: 'SC-1003',
      name: 'Sophia Martinez',
      age: 8,
      gender: 'Female',
      phone: '+1 (555) 423-1100',
      bloodGroup: 'B+',
      emergencyContact: 'Maria Martinez (Mother) - +1 (555) 423-1101',
      address: '54 Maple Ave, Westwood',
      allergies: 'Peanuts',
      registeredDate: '2026-03-05'
    },
    {
      id: 'SC-1004',
      name: 'James Wilson',
      age: 35,
      gender: 'Male',
      phone: '+1 (555) 654-7789',
      bloodGroup: 'AB+',
      emergencyContact: 'Emma Wilson (Sister) - +1 (555) 654-7790',
      address: '108 Harbor View, Seaside',
      allergies: 'None',
      registeredDate: '2026-04-18'
    },
    {
      id: 'SC-1005',
      name: 'Fatima Al-Zahra',
      age: 29,
      gender: 'Female',
      phone: '+1 (555) 321-9988',
      bloodGroup: 'O-',
      emergencyContact: 'Tariq Al-Zahra (Brother) - +1 (555) 321-9989',
      address: '22 Crescent Blvd, Northside',
      allergies: 'Aspirin',
      registeredDate: '2026-05-22'
    },
    {
      id: 'SC-1006',
      name: 'Lucas Graham',
      age: 54,
      gender: 'Male',
      phone: '+1 (555) 765-2244',
      bloodGroup: 'A-',
      emergencyContact: 'Rachel Graham (Wife) - +1 (555) 765-2245',
      address: '89 Pine Grove Lane, Hillsdale',
      allergies: 'None',
      registeredDate: '2026-06-12'
    },
    {
      id: 'SC-1007',
      name: 'Chloe Bennett',
      age: 23,
      gender: 'Female',
      phone: '+1 (555) 543-8811',
      bloodGroup: 'B-',
      emergencyContact: 'David Bennett (Father) - +1 (555) 543-8812',
      address: '310 College Walk, University Park',
      allergies: 'Ibuprofen',
      registeredDate: '2026-07-30'
    },
    {
      id: 'SC-1008',
      name: 'Liam Henderson',
      age: 41,
      gender: 'Male',
      phone: '+1 (555) 876-5533',
      bloodGroup: 'O+',
      emergencyContact: 'Sandra Henderson (Wife) - +1 (555) 876-5534',
      address: '417 Industrial Parkway, Midtown',
      allergies: 'None',
      registeredDate: '2026-08-14'
    },
    {
      id: 'SC-1009',
      name: 'Amina Nour',
      age: 70,
      gender: 'Female',
      phone: '+1 (555) 654-2211',
      bloodGroup: 'AB-',
      emergencyContact: 'Samir Nour (Son) - +1 (555) 654-2212',
      address: '95 Sunset Promenade, Bayview',
      allergies: 'Codeine',
      registeredDate: '2026-09-02'
    },
    {
      id: 'SC-1010',
      name: 'Daniel Kim',
      age: 31,
      gender: 'Male',
      phone: '+1 (555) 432-8877',
      bloodGroup: 'O+',
      emergencyContact: 'Grace Kim (Wife) - +1 (555) 432-8878',
      address: '15 Beacon Hill, Eastside',
      allergies: 'Dust, Pollen',
      registeredDate: '2026-10-11'
    }
  ];

  const appointments = [
    {
      id: 'APT-2001',
      patientId: 'SC-1001',
      patientName: 'Eleanor Campbell',
      doctorId: 'DOC-101',
      doctorName: 'Dr. Sarah Mitchell',
      department: 'Cardiology & Heart Center',
      date: today,
      time: '09:30 AM',
      type: 'Follow-up',
      reason: 'Hypertension evaluation and ECG review',
      status: 'Completed',
      notes: 'Blood pressure controlled; continue current medication.'
    },
    {
      id: 'APT-2002',
      patientId: 'SC-1002',
      patientName: 'Arthur Pendelton',
      doctorId: 'DOC-102',
      doctorName: 'Dr. David Al-Mansoor',
      department: 'Outpatient Department (OPD)',
      date: today,
      time: '10:15 AM',
      type: 'Regular Checkup',
      reason: 'Routine annual blood glucose & lipid review',
      status: 'In Progress',
      notes: 'Currently in examination room 105.'
    },
    {
      id: 'APT-2003',
      patientId: 'SC-1003',
      patientName: 'Sophia Martinez',
      doctorId: 'DOC-103',
      doctorName: 'Dr. Elena Rostova',
      department: 'Pediatrics & Child Care',
      date: today,
      time: '11:00 AM',
      type: 'General',
      reason: 'Persistent seasonal cough and mild fever',
      status: 'Confirmed',
      notes: 'Patient checked in; waiting in reception area.'
    },
    {
      id: 'APT-2004',
      patientId: 'SC-1004',
      patientName: 'James Wilson',
      doctorId: 'DOC-104',
      doctorName: 'Dr. Marcus Vance',
      department: 'Orthopedic Surgery & Trauma',
      date: today,
      time: '11:45 AM',
      type: 'Urgent',
      reason: 'Right knee pain following sports injury',
      status: 'Scheduled',
      notes: 'Bring previous MRI scans if available.'
    },
    {
      id: 'APT-2005',
      patientId: 'SC-1005',
      patientName: 'Fatima Al-Zahra',
      doctorId: 'DOC-106',
      doctorName: 'Dr. Robert Chen',
      department: 'Dermatology Clinic',
      date: today,
      time: '01:30 PM',
      type: 'Consultation',
      reason: 'Skin rash on forearm and allergic reaction',
      status: 'Scheduled',
      notes: 'Patch testing may be performed.'
    },
    {
      id: 'APT-2006',
      patientId: 'SC-1006',
      patientName: 'Lucas Graham',
      doctorId: 'DOC-105',
      doctorName: 'Dr. Priya Sharma',
      department: 'Neurosciences',
      date: today,
      time: '02:15 PM',
      type: 'Consultation',
      reason: 'Chronic migraine headaches and visual aura',
      status: 'Scheduled',
      notes: 'Patient requested afternoon appointment.'
    },
    {
      id: 'APT-2007',
      patientId: 'SC-1007',
      patientName: 'Chloe Bennett',
      doctorId: 'DOC-102',
      doctorName: 'Dr. David Al-Mansoor',
      department: 'Outpatient Department (OPD)',
      date: tomorrow,
      time: '09:00 AM',
      type: 'Regular Checkup',
      reason: 'Fatigue, dizziness and low iron screening',
      status: 'Confirmed',
      notes: 'Fasting blood test required prior to consult.'
    },
    {
      id: 'APT-2008',
      patientId: 'SC-1008',
      patientName: 'Liam Henderson',
      doctorId: 'DOC-101',
      doctorName: 'Dr. Sarah Mitchell',
      department: 'Cardiology & Heart Center',
      date: tomorrow,
      time: '10:30 AM',
      type: 'Follow-up',
      reason: 'Post-stent 6-month routine cardiac evaluation',
      status: 'Scheduled',
      notes: 'Please bring stress test records.'
    },
    {
      id: 'APT-2009',
      patientId: 'SC-1009',
      patientName: 'Amina Nour',
      doctorId: 'DOC-104',
      doctorName: 'Dr. Marcus Vance',
      department: 'Orthopedic Surgery & Trauma',
      date: inTwoDays,
      time: '11:15 AM',
      type: 'Consultation',
      reason: 'Osteoarthritis stiffness in left hip',
      status: 'Scheduled',
      notes: 'Wheelchair assistance requested on arrival.'
    },
    {
      id: 'APT-2010',
      patientId: 'SC-1010',
      patientName: 'Daniel Kim',
      doctorId: 'DOC-103',
      doctorName: 'Dr. Elena Rostova',
      department: 'Pediatrics & Child Care',
      date: yesterday,
      time: '03:00 PM',
      type: 'Consultation',
      reason: 'Parental consultation regarding infant nutrition',
      status: 'Cancelled',
      notes: 'Patient rescheduled due to work emergency.'
    }
  ];

  const queue = [
    {
      id: 'Q-101',
      token: 1,
      appointmentId: 'APT-2001',
      patientId: 'SC-1001',
      patientName: 'Eleanor Campbell',
      doctorId: 'DOC-101',
      doctorName: 'Dr. Sarah Mitchell',
      department: 'Cardiology & Heart Center',
      room: 'Room 302',
      checkInTime: '09:10 AM',
      status: 'completed', // 'waiting' | 'in_progress' | 'completed' | 'skipped'
      callTime: '09:28 AM',
      completedTime: '09:55 AM'
    },
    {
      id: 'Q-102',
      token: 2,
      appointmentId: 'APT-2002',
      patientId: 'SC-1002',
      patientName: 'Arthur Pendelton',
      doctorId: 'DOC-102',
      doctorName: 'Dr. David Al-Mansoor',
      department: 'Outpatient Department (OPD)',
      room: 'Room 105',
      checkInTime: '10:00 AM',
      status: 'in_progress',
      callTime: '10:14 AM',
      completedTime: null
    },
    {
      id: 'Q-103',
      token: 3,
      appointmentId: 'APT-2003',
      patientId: 'SC-1003',
      patientName: 'Sophia Martinez',
      doctorId: 'DOC-103',
      doctorName: 'Dr. Elena Rostova',
      department: 'Pediatrics & Child Care',
      room: 'Room 210',
      checkInTime: '10:45 AM',
      status: 'waiting',
      callTime: null,
      completedTime: null
    },
    {
      id: 'Q-104',
      token: 4,
      appointmentId: 'APT-2004',
      patientId: 'SC-1004',
      patientName: 'James Wilson',
      doctorId: 'DOC-104',
      doctorName: 'Dr. Marcus Vance',
      department: 'Orthopedic Surgery & Trauma',
      room: 'Room 401',
      checkInTime: '11:20 AM',
      status: 'waiting',
      callTime: null,
      completedTime: null
    },
    {
      id: 'Q-105',
      token: 5,
      appointmentId: null,
      patientId: 'SC-1005',
      patientName: 'Fatima Al-Zahra',
      doctorId: 'DOC-106',
      doctorName: 'Dr. Robert Chen',
      department: 'Dermatology Clinic',
      room: 'Room 118',
      checkInTime: '11:35 AM',
      status: 'waiting',
      callTime: null,
      completedTime: null
    }
  ];

  const medicalRecords = [
    {
      id: 'REC-3001',
      patientId: 'SC-1001',
      patientName: 'Eleanor Campbell',
      doctorId: 'DOC-101',
      doctorName: 'Dr. Sarah Mitchell',
      department: 'Cardiology',
      date: today,
      vitals: {
        bloodPressure: '124/82 mmHg',
        heartRate: '72 bpm',
        temperature: '98.4 °F',
        weight: '68 kg'
      },
      symptoms: 'Mild morning dizziness when standing, fatigue after climbing stairs.',
      diagnosis: 'Essential Stage 1 Hypertension (Controlled)',
      treatment: 'Continue Amlodipine 5mg daily. Low sodium diet, 30 min daily brisk walking.',
      prescriptions: [
        { medication: 'Amlodipine', dosage: '5mg', frequency: 'Once daily (morning)', duration: '90 days' },
        { medication: 'CoQ10 Supplement', dosage: '100mg', frequency: 'Once daily with meals', duration: '60 days' }
      ],
      followUpDate: inThreeDays,
      notes: 'ECG shows normal sinus rhythm. Renal panel within normal parameters.'
    },
    {
      id: 'REC-3002',
      patientId: 'SC-1002',
      patientName: 'Arthur Pendelton',
      doctorId: 'DOC-102',
      doctorName: 'Dr. David Al-Mansoor',
      department: 'General Medicine',
      date: yesterday,
      vitals: {
        bloodPressure: '132/86 mmHg',
        heartRate: '76 bpm',
        temperature: '98.6 °F',
        weight: '82 kg'
      },
      symptoms: 'Increased thirst, mild peripheral numbness in toes, nocturia.',
      diagnosis: 'Type 2 Diabetes Mellitus with mild neuropathy',
      treatment: 'Metformin titration, dietary carbohydrate control, diabetic foot care education.',
      prescriptions: [
        { medication: 'Metformin HCl', dosage: '500mg', frequency: 'Twice daily after meals', duration: '60 days' },
        { medication: 'Alpha Lipoic Acid', dosage: '600mg', frequency: 'Once daily before breakfast', duration: '30 days' }
      ],
      followUpDate: inTwoDays,
      notes: 'HbA1c level requested. Patient advised to maintain daily glucose log.'
    },
    {
      id: 'REC-3003',
      patientId: 'SC-1003',
      patientName: 'Sophia Martinez',
      doctorId: 'DOC-103',
      doctorName: 'Dr. Elena Rostova',
      department: 'Pediatrics',
      date: yesterday,
      vitals: {
        bloodPressure: '100/65 mmHg',
        heartRate: '88 bpm',
        temperature: '100.2 °F',
        weight: '24 kg'
      },
      symptoms: 'Dry barking cough for 4 days, low-grade fever, nasal congestion.',
      diagnosis: 'Acute Upper Respiratory Tract Infection (Viral Rhinosinusitis)',
      treatment: 'Steam inhalation, warm fluids, saline nasal drops. Rest from school.',
      prescriptions: [
        { medication: 'Paracetamol Suspension (120mg/5ml)', dosage: '7.5ml', frequency: 'Every 6 hours as needed for fever', duration: '3 days' },
        { medication: 'Saline Nasal Drops', dosage: '2 drops per nostril', frequency: 'Thrice daily', duration: '5 days' },
        { medication: 'Cetirizine Syrup', dosage: '5ml', frequency: 'Once daily at bedtime', duration: '5 days' }
      ],
      followUpDate: inThreeDays,
      notes: 'Chest is clear upon auscultation. Return immediately if breathing difficulty occurs.'
    },
    {
      id: 'REC-3004',
      patientId: 'SC-1006',
      patientName: 'Lucas Graham',
      doctorId: 'DOC-105',
      doctorName: 'Dr. Priya Sharma',
      department: 'Neurology',
      date: getTodayStr(-3),
      vitals: {
        bloodPressure: '128/80 mmHg',
        heartRate: '68 bpm',
        temperature: '98.4 °F',
        weight: '79 kg'
      },
      symptoms: 'Throbbing unilateral headache, photophobia, nausea.',
      diagnosis: 'Migraine with Aura (Episodic)',
      treatment: 'Abortive triptan therapy at onset. Sleep hygiene and trigger diary.',
      prescriptions: [
        { medication: 'Sumatriptan', dosage: '50mg', frequency: 'At migraine onset, repeat after 2h if needed (max 100mg/day)', duration: 'As needed' },
        { medication: 'Magnesium Glycinate', dosage: '400mg', frequency: 'Every night before bed', duration: '90 days' }
      ],
      followUpDate: inTwoDays,
      notes: 'Neurological examination cranial nerves II-XII intact.'
    }
  ];

  const activities = [
    {
      id: 'ACT-1',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      date: today,
      title: 'Consultation In Progress',
      description: 'Arthur Pendelton called into Room 105 by Dr. David Al-Mansoor.',
      category: 'queue',
      badge: 'Queue'
    },
    {
      id: 'ACT-2',
      timestamp: '09:55 AM',
      date: today,
      title: 'Consultation Completed',
      description: 'Eleanor Campbell completed cardiology visit with Dr. Sarah Mitchell.',
      category: 'medical',
      badge: 'Medical'
    },
    {
      id: 'ACT-3',
      timestamp: '09:12 AM',
      date: today,
      title: 'New Patient Registered',
      description: 'Daniel Kim (SC-1010) registered successfully in Outpatient registry.',
      category: 'patient',
      badge: 'Patient'
    },
    {
      id: 'ACT-4',
      timestamp: '08:45 AM',
      date: today,
      title: 'Appointment Booked',
      description: 'Appointment APT-2004 booked for James Wilson with Dr. Marcus Vance.',
      category: 'appointment',
      badge: 'Appointment'
    },
    {
      id: 'ACT-5',
      timestamp: '08:30 AM',
      date: today,
      title: 'Daily Clinic Queue Opened',
      description: 'OPD and Specialist token dispenser initialized for daily outpatient admissions.',
      category: 'system',
      badge: 'System'
    }
  ];

  return {
    doctors,
    patients,
    appointments,
    queue,
    medicalRecords,
    activities,
    lastUpdated: new Date().toISOString()
  };
}

class StorageManager {
  constructor() {
    this.init();
  }

  init() {
    try {
      const existing = localStorage.getItem(STORAGE_KEY);
      if (!existing) {
        this.resetToDemoData();
      } else {
        // verify structure integrity
        const data = JSON.parse(existing);
        if (!data.patients || !data.doctors || !data.appointments || !data.queue || !data.medicalRecords) {
          this.resetToDemoData();
        }
      }
    } catch (e) {
      console.warn('Storage init fallback to seed:', e);
      this.resetToDemoData();
    }
  }

  getDB() {
    try {
      const dataStr = localStorage.getItem(STORAGE_KEY);
      if (!dataStr) return this.resetToDemoData();
      return JSON.parse(dataStr);
    } catch (e) {
      console.error('Error parsing DB from localStorage:', e);
      return this.resetToDemoData();
    }
  }

  saveDB(db) {
    try {
      db.lastUpdated = new Date().toISOString();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
      window.dispatchEvent(new CustomEvent('smartcare:datachanged', { detail: { timestamp: Date.now() } }));
      return true;
    } catch (e) {
      console.error('Failed to save to localStorage:', e);
      return false;
    }
  }

  resetToDemoData() {
    const seed = getInitialSeedData();
    this.saveDB(seed);
    this.logActivity('System Reset', 'Restored complete demonstration hospital database.', 'system');
    return seed;
  }

  // Activity Log
  logActivity(title, description, category = 'system') {
    const db = this.getDB();
    if (!db.activities) db.activities = [];
    const newAct = {
      id: 'ACT-' + Date.now().toString(36) + Math.random().toString(36).substr(2, 4),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      date: getTodayStr(),
      title,
      description,
      category,
      badge: category.charAt(0).toUpperCase() + category.slice(1)
    };
    db.activities.unshift(newAct);
    // keep maximum 40 recent activities
    if (db.activities.length > 40) db.activities.pop();
    this.saveDB(db);
  }

  getActivities() {
    const db = this.getDB();
    return db.activities || [];
  }

  // --- PATIENTS ---
  getPatients() {
    const db = this.getDB();
    return db.patients || [];
  }

  getPatientById(id) {
    if (!id) return null;
    const db = this.getDB();
    return db.patients.find(p => p.id.toUpperCase() === id.trim().toUpperCase()) || null;
  }

  isPatientIdDuplicate(id, excludeId = null) {
    if (!id) return false;
    const db = this.getDB();
    return db.patients.some(p => p.id.toUpperCase() === id.trim().toUpperCase() && p.id !== excludeId);
  }

  generateNextPatientId() {
    const db = this.getDB();
    let maxNum = 1000;
    (db.patients || []).forEach(p => {
      const match = p.id.match(/SC-(\d+)/i);
      if (match) {
        const num = parseInt(match[1], 10);
        if (!isNaN(num) && num > maxNum) maxNum = num;
      }
    });
    return `SC-${maxNum + 1}`;
  }

  addPatient(patientData) {
    const db = this.getDB();
    const id = (patientData.id || this.generateNextPatientId()).trim().toUpperCase();

    if (this.isPatientIdDuplicate(id)) {
      throw new Error(`Patient ID "${id}" already exists. Please choose a unique ID.`);
    }

    const newPatient = {
      ...patientData,
      id,
      registeredDate: patientData.registeredDate || getTodayStr()
    };

    db.patients.unshift(newPatient);
    this.saveDB(db);
    this.logActivity('Patient Registered', `${newPatient.name} (ID: ${newPatient.id}) registered into hospital records.`, 'patient');
    return newPatient;
  }

  updatePatient(id, updatedFields) {
    const db = this.getDB();
    const index = db.patients.findIndex(p => p.id.toUpperCase() === id.toUpperCase());
    if (index === -1) throw new Error('Patient not found');

    // check if ID was changed and if new ID is duplicate
    if (updatedFields.id && updatedFields.id.toUpperCase() !== id.toUpperCase()) {
      if (this.isPatientIdDuplicate(updatedFields.id, id)) {
        throw new Error(`Patient ID "${updatedFields.id}" is already used by another patient.`);
      }
    }

    const oldName = db.patients[index].name;
    const updatedPatient = { ...db.patients[index], ...updatedFields };
    db.patients[index] = updatedPatient;

    // sync updated patient name across appointments and queue
    if (updatedFields.name && updatedFields.name !== oldName) {
      db.appointments.forEach(apt => {
        if (apt.patientId === id) apt.patientName = updatedFields.name;
      });
      db.queue.forEach(q => {
        if (q.patientId === id) q.patientName = updatedFields.name;
      });
      db.medicalRecords.forEach(rec => {
        if (rec.patientId === id) rec.patientName = updatedFields.name;
      });
    }

    this.saveDB(db);
    this.logActivity('Patient Updated', `Record for ${updatedPatient.name} (${updatedPatient.id}) was modified.`, 'patient');
    return updatedPatient;
  }

  deletePatient(id) {
    const db = this.getDB();
    const patient = db.patients.find(p => p.id.toUpperCase() === id.toUpperCase());
    if (!patient) throw new Error('Patient not found');

    db.patients = db.patients.filter(p => p.id.toUpperCase() !== id.toUpperCase());
    // remove or mark associated queue and appointments
    db.queue = db.queue.filter(q => q.patientId.toUpperCase() !== id.toUpperCase());
    
    this.saveDB(db);
    this.logActivity('Patient Deleted', `Patient ${patient.name} (${patient.id}) removed from records.`, 'patient');
    return true;
  }

  // --- DOCTORS ---
  getDoctors() {
    const db = this.getDB();
    return db.doctors || [];
  }

  getDoctorById(id) {
    const db = this.getDB();
    return db.doctors.find(d => d.id === id) || null;
  }

  generateNextDoctorId() {
    const db = this.getDB();
    let maxNum = 100;
    (db.doctors || []).forEach(d => {
      const match = d.id.match(/DOC-(\d+)/i);
      if (match) {
        const num = parseInt(match[1], 10);
        if (!isNaN(num) && num > maxNum) maxNum = num;
      }
    });
    return `DOC-${maxNum + 1}`;
  }

  addDoctor(doctorData) {
    const db = this.getDB();
    const id = doctorData.id || this.generateNextDoctorId();
    const newDoc = {
      ...doctorData,
      id,
      status: doctorData.status || 'Active'
    };
    db.doctors.push(newDoc);
    this.saveDB(db);
    this.logActivity('Doctor Added', `${newDoc.name} (${newDoc.specialization}) joined medical staff.`, 'doctor');
    return newDoc;
  }

  updateDoctor(id, fields) {
    const db = this.getDB();
    const idx = db.doctors.findIndex(d => d.id === id);
    if (idx === -1) throw new Error('Doctor not found');

    const updated = { ...db.doctors[idx], ...fields };
    db.doctors[idx] = updated;

    // Sync name in appointments and queue
    if (fields.name) {
      db.appointments.forEach(apt => {
        if (apt.doctorId === id) {
          apt.doctorName = fields.name;
          if (fields.department) apt.department = fields.department;
        }
      });
      db.queue.forEach(q => {
        if (q.doctorId === id) {
          q.doctorName = fields.name;
          if (fields.department) q.department = fields.department;
          if (fields.room) q.room = fields.room;
        }
      });
    }

    this.saveDB(db);
    this.logActivity('Doctor Updated', `Profile updated for ${updated.name}.`, 'doctor');
    return updated;
  }

  deleteDoctor(id) {
    const db = this.getDB();
    const doc = db.doctors.find(d => d.id === id);
    if (!doc) throw new Error('Doctor not found');

    db.doctors = db.doctors.filter(d => d.id !== id);
    this.saveDB(db);
    this.logActivity('Doctor Removed', `${doc.name} removed from active roster.`, 'doctor');
    return true;
  }

  // --- APPOINTMENTS ---
  getAppointments() {
    const db = this.getDB();
    return db.appointments || [];
  }

  getAppointmentById(id) {
    const db = this.getDB();
    return db.appointments.find(a => a.id === id) || null;
  }

  generateNextAppointmentId() {
    const db = this.getDB();
    let maxNum = 2000;
    (db.appointments || []).forEach(a => {
      const match = a.id.match(/APT-(\d+)/i);
      if (match) {
        const num = parseInt(match[1], 10);
        if (!isNaN(num) && num > maxNum) maxNum = num;
      }
    });
    return `APT-${maxNum + 1}`;
  }

  addAppointment(appointmentData) {
    const db = this.getDB();
    const id = this.generateNextAppointmentId();

    const patient = this.getPatientById(appointmentData.patientId);
    const doctor = this.getDoctorById(appointmentData.doctorId);

    const newApt = {
      id,
      patientId: appointmentData.patientId,
      patientName: patient ? patient.name : appointmentData.patientName,
      doctorId: appointmentData.doctorId,
      doctorName: doctor ? doctor.name : appointmentData.doctorName,
      department: doctor ? doctor.department : (appointmentData.department || 'Outpatient'),
      date: appointmentData.date || getTodayStr(),
      time: appointmentData.time || '10:00 AM',
      type: appointmentData.type || 'Consultation',
      reason: appointmentData.reason || 'General medical consultation',
      status: appointmentData.status || 'Scheduled',
      notes: appointmentData.notes || ''
    };

    db.appointments.unshift(newApt);
    this.saveDB(db);
    this.logActivity('Appointment Booked', `Booked for ${newApt.patientName} with ${newApt.doctorName} on ${newApt.date} at ${newApt.time}.`, 'appointment');
    return newApt;
  }

  updateAppointment(id, fields) {
    const db = this.getDB();
    const idx = db.appointments.findIndex(a => a.id === id);
    if (idx === -1) throw new Error('Appointment not found');

    const updated = { ...db.appointments[idx], ...fields };
    db.appointments[idx] = updated;

    // If status changed to In Progress or Completed, sync queue item if present
    if (fields.status) {
      const qItem = db.queue.find(q => q.appointmentId === id);
      if (qItem) {
        if (fields.status === 'In Progress') {
          qItem.status = 'in_progress';
          qItem.callTime = qItem.callTime || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        } else if (fields.status === 'Completed') {
          qItem.status = 'completed';
          qItem.completedTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        } else if (fields.status === 'Cancelled') {
          qItem.status = 'skipped';
        }
      }
    }

    this.saveDB(db);
    this.logActivity('Appointment Updated', `Appointment ${id} status set to "${updated.status}".`, 'appointment');
    return updated;
  }

  deleteAppointment(id) {
    const db = this.getDB();
    const apt = db.appointments.find(a => a.id === id);
    if (!apt) throw new Error('Appointment not found');

    db.appointments = db.appointments.filter(a => a.id !== id);
    this.saveDB(db);
    this.logActivity('Appointment Deleted', `Appointment ${id} for ${apt.patientName} was cancelled and removed.`, 'appointment');
    return true;
  }

  // --- PATIENT QUEUE ---
  getQueue() {
    const db = this.getDB();
    return db.queue || [];
  }

  addToQueue(queueData) {
    const db = this.getDB();
    const currentQueue = db.queue || [];
    const maxToken = currentQueue.reduce((max, q) => (q.token > max ? q.token : max), 0);
    const token = maxToken + 1;

    const patient = this.getPatientById(queueData.patientId);
    const doctor = this.getDoctorById(queueData.doctorId);

    const newQueueItem = {
      id: 'Q-' + Date.now().toString(36),
      token,
      appointmentId: queueData.appointmentId || null,
      patientId: queueData.patientId,
      patientName: patient ? patient.name : queueData.patientName,
      doctorId: queueData.doctorId,
      doctorName: doctor ? doctor.name : queueData.doctorName,
      department: doctor ? doctor.department : (queueData.department || 'Outpatient'),
      room: doctor ? doctor.room : 'Consultation Desk',
      checkInTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'waiting', // 'waiting' | 'in_progress' | 'completed' | 'skipped'
      callTime: null,
      completedTime: null
    };

    db.queue.push(newQueueItem);
    this.saveDB(db);
    this.logActivity('Queue Token Issued', `Token #${token} issued to ${newQueueItem.patientName} for ${newQueueItem.doctorName}.`, 'queue');
    return newQueueItem;
  }

  updateQueueStatus(id, newStatus) {
    const db = this.getDB();
    const item = db.queue.find(q => q.id === id);
    if (!item) throw new Error('Queue item not found');

    item.status = newStatus;
    const nowTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (newStatus === 'in_progress') {
      item.callTime = nowTime;
      // sync appointment if connected
      if (item.appointmentId) {
        const apt = db.appointments.find(a => a.id === item.appointmentId);
        if (apt) apt.status = 'In Progress';
      }
      this.logActivity('Patient Called', `Token #${item.token} (${item.patientName}) called into ${item.room}.`, 'queue');
    } else if (newStatus === 'completed') {
      item.completedTime = nowTime;
      if (item.appointmentId) {
        const apt = db.appointments.find(a => a.id === item.appointmentId);
        if (apt) apt.status = 'Completed';
      }
      this.logActivity('Consultation Finished', `Token #${item.token} (${item.patientName}) marked as completed.`, 'queue');
    } else if (newStatus === 'waiting') {
      item.callTime = null;
      item.completedTime = null;
    }

    this.saveDB(db);
    return item;
  }

  removeFromQueue(id) {
    const db = this.getDB();
    const item = db.queue.find(q => q.id === id);
    if (!item) return false;
    db.queue = db.queue.filter(q => q.id !== id);
    this.saveDB(db);
    this.logActivity('Removed from Queue', `Token #${item.token} (${item.patientName}) removed from waiting line.`, 'queue');
    return true;
  }

  // --- MEDICAL VISIT RECORDS ---
  getMedicalRecords() {
    const db = this.getDB();
    return db.medicalRecords || [];
  }

  getRecordsByPatientId(patientId) {
    const db = this.getDB();
    return (db.medicalRecords || []).filter(r => r.patientId.toUpperCase() === patientId.trim().toUpperCase());
  }

  generateNextRecordId() {
    const db = this.getDB();
    let maxNum = 3000;
    (db.medicalRecords || []).forEach(r => {
      const match = r.id.match(/REC-(\d+)/i);
      if (match) {
        const num = parseInt(match[1], 10);
        if (!isNaN(num) && num > maxNum) maxNum = num;
      }
    });
    return `REC-${maxNum + 1}`;
  }

  addMedicalRecord(recordData) {
    const db = this.getDB();
    const patient = this.getPatientById(recordData.patientId);
    if (!patient) throw new Error('Invalid Patient ID. Please select an existing patient.');
    const doctor = this.getDoctorById(recordData.doctorId);

    const newRec = {
      id: this.generateNextRecordId(),
      patientId: patient.id,
      patientName: patient.name,
      doctorId: doctor ? doctor.id : (recordData.doctorId || 'DOC-GEN'),
      doctorName: doctor ? doctor.name : (recordData.doctorName || 'Attending Physician'),
      department: doctor ? doctor.department : (recordData.department || 'Outpatient'),
      date: recordData.date || getTodayStr(),
      vitals: {
        bloodPressure: recordData.vitals?.bloodPressure || 'Normal',
        heartRate: recordData.vitals?.heartRate || '--',
        temperature: recordData.vitals?.temperature || '--',
        weight: recordData.vitals?.weight || '--'
      },
      symptoms: recordData.symptoms || '',
      diagnosis: recordData.diagnosis || 'Clinical evaluation pending',
      treatment: recordData.treatment || '',
      prescriptions: recordData.prescriptions || [],
      followUpDate: recordData.followUpDate || '',
      notes: recordData.notes || ''
    };

    db.medicalRecords.unshift(newRec);

    // If an appointment is related, mark it completed
    if (recordData.appointmentId) {
      const apt = db.appointments.find(a => a.id === recordData.appointmentId);
      if (apt) apt.status = 'Completed';
    }

    this.saveDB(db);
    this.logActivity('Medical Record Added', `Clinical visit documented for ${patient.name} by ${newRec.doctorName}.`, 'medical');
    return newRec;
  }

  updateMedicalRecord(id, fields) {
    const db = this.getDB();
    const idx = db.medicalRecords.findIndex(r => r.id === id);
    if (idx === -1) throw new Error('Medical record not found');

    const updated = { ...db.medicalRecords[idx], ...fields };
    db.medicalRecords[idx] = updated;
    this.saveDB(db);
    this.logActivity('Medical Record Updated', `Visit record ${id} for ${updated.patientName} was updated.`, 'medical');
    return updated;
  }

  deleteMedicalRecord(id) {
    const db = this.getDB();
    const rec = db.medicalRecords.find(r => r.id === id);
    if (!rec) throw new Error('Record not found');

    db.medicalRecords = db.medicalRecords.filter(r => r.id !== id);
    this.saveDB(db);
    this.logActivity('Medical Record Removed', `Record ${id} for ${rec.patientName} deleted.`, 'medical');
    return true;
  }

  // --- BACKUP & RESTORE ---
  exportDatabase() {
    const db = this.getDB();
    const jsonStr = JSON.stringify(db, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SmartCare_Backup_${getTodayStr()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    this.logActivity('Backup Exported', 'Hospital database JSON backup downloaded.', 'system');
  }

  importDatabase(jsonStr) {
    try {
      const parsed = JSON.parse(jsonStr);
      if (!parsed.patients || !parsed.doctors || !parsed.appointments) {
        throw new Error('Invalid hospital database format. Missing core tables.');
      }
      this.saveDB(parsed);
      this.logActivity('Backup Restored', 'Hospital database restored from imported backup.', 'system');
      return true;
    } catch (e) {
      throw new Error('Failed to import database: ' + e.message);
    }
  }
}

// Global UI helper formatters
window.getStatusBadgeClass = function(status) {
  switch (status) {
    case 'Completed': return 'success';
    case 'In Progress': return 'primary';
    case 'Confirmed': return 'sky';
    case 'Scheduled': return 'amber';
    case 'Cancelled': return 'danger';
    default: return 'secondary';
  }
};

window.smartStorage = new StorageManager();
