import {
  Microscope,
  HeartPulse,
  Stethoscope,
  Activity,
  Scan,
  Eye,
  FlaskConical,
  Syringe,
  type LucideIcon,
} from 'lucide-react';

export type Course = {
  slug: string;
  code: string;
  title: string;
  short: string;
  description: string;
  duration: string;
  eligibility: string;
  fees: string;
  seats: number;
  category: 'Diagnostics' | 'Clinical' | 'Imaging' | 'Therapeutic';
  icon: LucideIcon;
  color: string;
  outcomes: string[];
  curriculum: { year: string; modules: string[] }[];
  careers: string[];
  salary: { entry: string; mid: string; senior: string };
  hero: string;
};

export const courses: Course[] = [
  {
    slug: 'dmlt',
    code: 'DMLT',
    title: 'Diploma in Medical Lab Technician',
    short: 'DMLT',
    description:
      'Students can work in government and private hospitals, diagnostic labs and healthcare departments. Graduates can also establish their own diagnostic centres for self-employment.',
    duration: '2 Years',
    eligibility: 'Inter (Any Group) Pass',
    fees: 'Contact for Fees',
    seats: 60,
    category: 'Diagnostics',
    icon: Microscope,
    color: 'from-brand-500 to-teal-500',
    outcomes: [
      'Operate clinical lab instruments',
      'Perform hematology, biochemistry & pathology tests',
      'Hospital lab internship & hands-on training',
    ],
    curriculum: [
      {
        year: 'Year 1',
        modules: [
          'Human Anatomy & Physiology',
          'Clinical Biochemistry',
          'Hematology Fundamentals',
          'Microbiology Basics',
          'Lab Safety & Quality Control',
        ],
      },
      {
        year: 'Year 2',
        modules: [
          'Clinical Pathology',
          'Immunology & Serology',
          'Histopathology',
          'Blood Banking',
          'Hospital Lab Internship',
        ],
      },
    ],
    careers: [
      'Medical Lab Technician',
      'Government Hospitals',
      'Corporate Hospitals',
      'Diagnostic Centers',
      'Self Employment',
      'Water Testing Labs',
      'Health Departments',
      'Gulf & Abroad Opportunities',
    ],
    salary: { entry: 'Entry Level', mid: 'Mid-Career', senior: 'Lab In-charge' },
    hero: 'Diagnose. Discover. Decide. The science behind every prescription.',
  },
  {
    slug: 'dmpha-m',
    code: 'DMPHA (M)',
    title: 'Diploma in Multipurpose Health Assistant (Male)',
    short: 'DMPHA (M)',
    description:
      'Focused on healthcare assistance and public health services with opportunities in hospitals and healthcare departments.',
    duration: '2 Years',
    eligibility: 'Inter (Any Group) Pass',
    fees: 'Contact for Fees',
    seats: 40,
    category: 'Clinical',
    icon: Stethoscope,
    color: 'from-teal-500 to-brand-500',
    outcomes: [
      'Patient care & community health',
      'Public health programs',
      'Hands-on hospital exposure',
    ],
    curriculum: [
      {
        year: 'Year 1',
        modules: [
          'Anatomy & Physiology',
          'Community Health',
          'First Aid & Emergency Care',
          'Health Education',
        ],
      },
      {
        year: 'Year 2',
        modules: [
          'Public Health Programs',
          'Mother & Child Health',
          'Communicable Diseases',
          'Hospital Internship',
        ],
      },
    ],
    careers: [
      'Government Hospitals',
      'Healthcare Services',
      'Public Health Departments',
      'Primary Health Centres',
      'NGO & Field Health Programs',
    ],
    salary: { entry: 'Entry Level', mid: 'Mid-Career', senior: 'Senior Health Worker' },
    hero: 'Frontline care. Community impact. Public health, on the ground.',
  },
  {
    slug: 'dans',
    code: 'DANS',
    title: 'Diploma in Anesthesia Technician',
    short: 'DANS',
    description:
      'Provides practical training in anesthesia technology and operation support — preparing students for OT and critical care roles.',
    duration: '2 Years',
    eligibility: 'Inter (Any Group) Pass',
    fees: 'Contact for Fees',
    seats: 30,
    category: 'Clinical',
    icon: Syringe,
    color: 'from-brand-500 to-gold-400',
    outcomes: [
      'Anesthesia equipment handling',
      'Pre & post-operative patient support',
      'Live OT exposure with partner hospitals',
    ],
    curriculum: [
      {
        year: 'Year 1',
        modules: [
          'Anatomy for Anesthesia',
          'Pharmacology Basics',
          'Anesthesia Equipment',
          'Patient Monitoring',
        ],
      },
      {
        year: 'Year 2',
        modules: [
          'Anesthesia Procedures',
          'Pain Management',
          'Emergency Protocols',
          'OT Internship',
        ],
      },
    ],
    careers: [
      'Anesthesia Technician',
      'Government Hospitals',
      'Corporate Hospitals',
      'Surgical Centres',
    ],
    salary: { entry: 'Entry Level', mid: 'Mid-Career', senior: 'Senior OT Tech' },
    hero: 'Precision under pressure. Excellence inside the operating theatre.',
  },
  {
    slug: 'decg',
    code: 'DECG',
    title: 'Diploma in ECG Technician',
    short: 'DECG',
    description:
      'Students learn ECG procedures and cardiac diagnostic support systems used in hospitals and diagnostic centres.',
    duration: '2 Years',
    eligibility: 'Inter (Any Group) Pass',
    fees: 'Contact for Fees',
    seats: 30,
    category: 'Diagnostics',
    icon: HeartPulse,
    color: 'from-brand-500 to-teal-400',
    outcomes: [
      'ECG operation & interpretation basics',
      'Holter & TMT testing',
      'Cardiology unit exposure',
    ],
    curriculum: [
      {
        year: 'Year 1',
        modules: [
          'Cardiac Anatomy & Physiology',
          'ECG Principles',
          'Patient Preparation',
          'Cardiac Pharmacology Basics',
        ],
      },
      {
        year: 'Year 2',
        modules: [
          'Holter Monitoring',
          'Treadmill Test (TMT)',
          'Cath Lab Procedures Overview',
          'Cardiology Internship',
        ],
      },
    ],
    careers: ['ECG Technician', 'Diagnostic Centers', 'Hospitals', 'Cardiology Clinics'],
    salary: { entry: 'Entry Level', mid: 'Mid-Career', senior: 'Senior ECG Tech' },
    hero: 'Every heartbeat tells a story. Learn to read it.',
  },
  {
    slug: 'dom',
    code: 'DOM',
    title: 'Diploma in Ophthalmology',
    short: 'DOM',
    description:
      'Students are trained in eye-related testing and optical healthcare services — ideal for hospitals, optical shops and self-employment.',
    duration: '2 Years',
    eligibility: 'Inter (Any Group) Pass',
    fees: 'Contact for Fees',
    seats: 30,
    category: 'Clinical',
    icon: Eye,
    color: 'from-teal-500 to-gold-400',
    outcomes: [
      'Eye testing & refraction',
      'Optical dispensing skills',
      'Ophthalmology OPD experience',
    ],
    curriculum: [
      {
        year: 'Year 1',
        modules: [
          'Ocular Anatomy & Physiology',
          'Refraction Basics',
          'Visual Acuity Testing',
          'Optical Instruments',
        ],
      },
      {
        year: 'Year 2',
        modules: [
          'Advanced Refraction',
          'Contact Lens Practice',
          'Ophthalmic Diagnostics',
          'Eye Clinic Internship',
        ],
      },
    ],
    careers: ['Eye Testing Specialist', 'Optical Shops', 'Self Employment', 'Hospitals', 'Vision Centres'],
    salary: { entry: 'Entry Level', mid: 'Mid-Career', senior: 'Optometry Lead' },
    hero: 'See clearly. Diagnose confidently. Vision care, redefined.',
  },
  {
    slug: 'dmit',
    code: 'DMIT',
    title: 'Diploma in Medical Imaging Technician',
    short: 'DMIT',
    description:
      'Specialised training in medical imaging and diagnostic technology — X-Ray, ultrasound and modern radiology workflows.',
    duration: '2 Years',
    eligibility: 'Inter (Any Group) Pass',
    fees: 'Contact for Fees',
    seats: 40,
    category: 'Imaging',
    icon: Scan,
    color: 'from-brand-500 to-teal-500',
    outcomes: [
      'Digital X-ray operation',
      'Radiation safety & positioning',
      'Imaging unit exposure (X-ray, USG, CT basics)',
    ],
    curriculum: [
      {
        year: 'Year 1',
        modules: [
          'Radiographic Anatomy',
          'X-Ray Physics',
          'Patient Positioning',
          'Radiation Protection',
        ],
      },
      {
        year: 'Year 2',
        modules: [
          'Contrast Studies',
          'Digital Radiography',
          'CT & USG Overview',
          'Hospital Imaging Internship',
        ],
      },
    ],
    careers: ['Imaging Technician', 'Diagnostic Centers', 'Corporate Hospitals', 'Radiology Clinics'],
    salary: { entry: 'Entry Level', mid: 'Mid-Career', senior: 'Senior Imaging Tech' },
    hero: 'See inside. Diagnose smarter. Imaging that saves lives.',
  },
  {
    slug: 'dmst',
    code: 'DMST',
    title: 'Diploma in Medical Sterilization & Operation Theatre Technician',
    short: 'DMST',
    description:
      'Students gain operation theatre and sterilisation management skills — preparing them for OT departments and CSSD roles.',
    duration: '2 Years',
    eligibility: 'Inter (Any Group) Pass',
    fees: 'Contact for Fees',
    seats: 40,
    category: 'Clinical',
    icon: FlaskConical,
    color: 'from-teal-500 to-brand-500',
    outcomes: [
      'Surgical instrument mastery',
      'Sterilisation & infection control',
      'Hands-on OT department exposure',
    ],
    curriculum: [
      {
        year: 'Year 1',
        modules: [
          'Anatomy for OT',
          'Microbiology & Sterilisation',
          'OT Equipment Handling',
          'Infection Control',
        ],
      },
      {
        year: 'Year 2',
        modules: [
          'Surgical Procedures',
          'Pre & Post-Operative Care',
          'CSSD Workflow',
          'OT Internship',
        ],
      },
    ],
    careers: [
      'Operation Theatre Technician',
      'Sterilization Specialist',
      'Hospital OT Departments',
      'CSSD In-charge',
    ],
    salary: { entry: 'Entry Level', mid: 'Mid-Career', senior: 'Senior OT Tech' },
    hero: 'A sterile field. A steady hand. The heart of every surgery.',
  },
  {
    slug: 'dclt',
    code: 'DCLT',
    title: 'Diploma in Cardiac Lab Technician',
    short: 'DCLT',
    description:
      'Focused on cardiac healthcare technology and lab support systems — preparing students for heart care centres and hospitals.',
    duration: '2 Years',
    eligibility: 'Inter (Any Group) Pass',
    fees: 'Contact for Fees',
    seats: 30,
    category: 'Diagnostics',
    icon: Activity,
    color: 'from-gold-400 to-brand-500',
    outcomes: [
      'Cardiac diagnostic procedures',
      'Cath lab familiarisation',
      'Heart care unit exposure',
    ],
    curriculum: [
      {
        year: 'Year 1',
        modules: [
          'Cardiac Anatomy & Physiology',
          'Cardiac Lab Procedures',
          'ECG / Echo Basics',
          'Patient Care',
        ],
      },
      {
        year: 'Year 2',
        modules: [
          'Cath Lab Procedures',
          'Cardiac Emergencies',
          'Advanced Cardiac Diagnostics',
          'Cardiology Internship',
        ],
      },
    ],
    careers: ['Cardiac Lab Technician', 'Heart Care Centers', 'Hospitals', 'Cath Labs'],
    salary: { entry: 'Entry Level', mid: 'Mid-Career', senior: 'Cardiac Lab Lead' },
    hero: 'Where heart care begins — in the cardiac lab.',
  },
];

export const features = [
  {
    title: '100% Job Guidance',
    desc: 'Placement support in government & private healthcare institutions for every eligible student.',
    icon: 'Briefcase',
  },
  {
    title: 'Government Job Opportunities',
    desc: 'Eligibility for paramedical posts in government hospitals and health departments.',
    icon: 'Building2',
  },
  {
    title: 'Private Hospital Opportunities',
    desc: 'Strong network with corporate hospitals, diagnostic chains and clinics across Telangana.',
    icon: 'Hospital',
  },
  {
    title: 'Self Employment Support',
    desc: 'Skills to launch your own diagnostic centre, optical shop or healthcare service.',
    icon: 'Sparkles',
  },
  {
    title: 'Practical Lab Training',
    desc: 'Hands-on lab sessions with modern medical equipment from day one.',
    icon: 'Microscope',
  },
  {
    title: 'Experienced Faculty',
    desc: 'Senior clinicians and qualified educators with real hospital experience.',
    icon: 'GraduationCap',
  },
  {
    title: 'Modern Equipment',
    desc: 'Lab instruments and simulation devices aligned with hospital workflows.',
    icon: 'Beaker',
  },
  {
    title: 'Industry Focused Learning',
    desc: 'Curriculum built around real healthcare roles — not just textbooks.',
    icon: 'MonitorPlay',
  },
  {
    title: 'Hospital Exposure',
    desc: 'Live internships and rotations across partner hospitals during the program.',
    icon: 'Stethoscope',
  },
  {
    title: 'Career Oriented Education',
    desc: 'Every program is designed for direct employability and long-term career growth.',
    icon: 'Compass',
  },
];

export const trustStats = [
  { label: 'Job Guidance', value: 100, suffix: '%' },
  { label: 'Year Programs', value: 2, suffix: ' Yr' },
  { label: 'Paramedical Courses', value: 8, suffix: '+' },
  { label: 'Govt & Private Roles', value: 50, suffix: '+' },
  { label: 'Telangana Board Affiliated', value: 1, suffix: '' },
];

export const careerTracks = [
  {
    title: 'Government Hospital Jobs',
    desc: 'Eligible for technician posts in state-run hospitals, PHCs and district health departments.',
    points: ['Telangana state recruitment eligibility', 'Stable career path', 'Pension & benefits'],
    color: 'from-brand-500 to-teal-500',
  },
  {
    title: 'Corporate & Private Hospitals',
    desc: 'Roles in multi-specialty hospitals, diagnostic chains and specialty clinics.',
    points: ['Apollo, Yashoda, KIMS-type chains', 'Diagnostic centres', 'Specialty clinics'],
    color: 'from-teal-500 to-brand-500',
  },
  {
    title: 'Diagnostic Centres',
    desc: 'Technician roles in pathology, imaging, cardiac and lab diagnostic centres.',
    points: ['Pathology labs', 'Imaging centres', 'Cardiac diagnostic units'],
    color: 'from-brand-500 to-gold-400',
  },
  {
    title: 'Self Employment',
    desc: 'Start your own diagnostic lab, optical shop or healthcare service.',
    points: ['Open diagnostic centres', 'Optical shop ownership', 'Mobile health services'],
    color: 'from-gold-400 to-brand-500',
  },
  {
    title: 'Gulf & Abroad',
    desc: 'Demand for trained paramedical technicians across the Gulf and overseas markets.',
    points: ['UAE, Saudi, Qatar opportunities', 'International healthcare', 'Higher pay scales'],
    color: 'from-teal-500 to-gold-400',
  },
  {
    title: 'Healthcare Entrepreneurship',
    desc: 'Build healthcare businesses — diagnostic chains, vision centres, OT services.',
    points: ['Diagnostic franchises', 'Vision-care brands', 'Specialty service providers'],
    color: 'from-brand-500 to-teal-400',
  },
];

export const partners = [
  'Government Hospitals',
  'Apollo Hospitals',
  'KIMS Hospital',
  'Yashoda Hospitals',
  'Continental Hospitals',
  'Care Hospitals',
  'AIG Hospitals',
  'Sunshine Hospital',
  'Asian Institute',
  'Diagnostic Centres',
  'SRL Diagnostics',
  'Vijaya Diagnostics',
  'Lucid Medical',
  'Tapadia Diagnostics',
  'Primary Health Centres',
];

export const testimonials = [
  {
    name: 'Sandeep K.',
    role: 'DMLT Alumnus',
    quote:
      'The labs at Sri Sai felt like real hospitals. I was confident from day one of my internship and joined a leading diagnostic centre right after graduation.',
    avatar: 'SK',
    color: 'from-brand-500 to-teal-500',
  },
  {
    name: 'Pavani R.',
    role: 'DECG Student, Final Year',
    quote:
      'Hands-on ECG and Holter training, friendly faculty and proper hospital exposure — Sri Sai prepares you for the real job, not just the syllabus.',
    avatar: 'PR',
    color: 'from-teal-500 to-gold-400',
  },
  {
    name: 'Mr. Ravi Kumar',
    role: 'Parent',
    quote:
      'My son joined DMST in 2023. The faculty, practical training and career guidance gave us confidence that our investment is worthwhile.',
    avatar: 'RK',
    color: 'from-brand-500 to-gold-400',
  },
  {
    name: 'Dr. Latha N.',
    role: 'Partner Hospital, Shadnagar',
    quote:
      'We routinely hire Sri Sai graduates for OT and lab roles. They arrive prepared, disciplined and ready to contribute from day one.',
    avatar: 'LN',
    color: 'from-gold-400 to-brand-500',
  },
  {
    name: 'Ayesha S.',
    role: 'DOM Alumna',
    quote:
      'I now manage an optical shop in Hyderabad. The eye testing and refraction practice at Sri Sai was the foundation of my entire career.',
    avatar: 'AS',
    color: 'from-teal-400 to-brand-500',
  },
];

export const faculty = [
  {
    name: 'B. Rajender Singh',
    role: 'Chairman',
    qual: 'Founder',
    exp: 'Founder & Visionary',
    avatar: 'RS',
  },
  {
    name: 'B. Madhuri',
    role: 'Correspondent',
    qual: 'Administration',
    exp: 'Academic Leadership',
    avatar: 'BM',
  },
  {
    name: 'Senior Faculty — DMLT',
    role: 'HoD · Medical Lab Technology',
    qual: 'M.Sc. MLT',
    exp: '12+ years',
    avatar: 'ML',
  },
  {
    name: 'Senior Faculty — OT & Sterilization',
    role: 'HoD · DMST',
    qual: 'M.Sc. OTT',
    exp: '10+ years',
    avatar: 'OT',
  },
  {
    name: 'Senior Faculty — Anesthesia',
    role: 'HoD · DANS',
    qual: 'B.Sc. Anesthesia',
    exp: '9+ years',
    avatar: 'AN',
  },
  {
    name: 'Senior Faculty — ECG & Cardiac',
    role: 'HoD · DECG / DCLT',
    qual: 'Cardiac Tech',
    exp: '10+ years',
    avatar: 'EC',
  },
  {
    name: 'Senior Faculty — Imaging',
    role: 'HoD · DMIT',
    qual: 'Radiography',
    exp: '8+ years',
    avatar: 'IM',
  },
  {
    name: 'Senior Faculty — Ophthalmology',
    role: 'HoD · DOM',
    qual: 'Optometry',
    exp: '8+ years',
    avatar: 'OP',
  },
];

export const infrastructure = [
  { title: 'Smart Classrooms', tag: 'Learning', desc: 'Interactive teaching, recorded lectures and case-based learning.' },
  { title: 'Medical Lab Technology Lab', tag: 'DMLT', desc: 'Hematology, biochemistry and pathology equipment for DMLT students.' },
  { title: 'Anesthesia & OT Simulation', tag: 'DANS / DMST', desc: 'Mock OT setup with anesthesia and sterilisation training.' },
  { title: 'Radiology / Imaging Lab', tag: 'DMIT', desc: 'X-Ray positioning, radiation safety and digital radiography practice.' },
  { title: 'ECG & Cardiac Lab', tag: 'DECG / DCLT', desc: 'ECG machines, Holter and treadmill testing for cardiac students.' },
  { title: 'Ophthalmology Practice Room', tag: 'DOM', desc: 'Refraction, visual acuity and ophthalmic diagnostic practice.' },
  { title: 'Public Health Demo Unit', tag: 'DMPHA (M)', desc: 'Community health, first aid and field training setup.' },
  { title: 'Library & Resource Centre', tag: 'Learning', desc: 'Paramedical books, journals and reference material.' },
  { title: 'Seminar Hall', tag: 'Events', desc: 'For workshops, guest lectures and recruiter drives.' },
  { title: 'Hospital Tie-ups', tag: 'Internship', desc: 'Rotations with partner hospitals and diagnostic centres.' },
  { title: 'Computer Lab', tag: 'Tech', desc: 'Hospital information systems and digital records training.' },
  { title: 'Student Common Room', tag: 'Campus Life', desc: 'Comfortable spaces for breaks, group study and discussions.' },
];

export const events = [
  {
    title: 'World Health Day Camp',
    date: '2026-04-07',
    type: 'Medical Camp',
    desc: 'Free health screening organised by students at the campus and nearby community.',
  },
  {
    title: 'Career Guidance Workshop',
    date: '2026-05-15',
    type: 'Workshop',
    desc: 'Government job preparation, interview skills and resume building for final-year students.',
  },
  {
    title: 'Hospital Recruiter Drive',
    date: '2026-06-20',
    type: 'Placement',
    desc: 'Multiple hospitals on campus for technician hiring across DMLT, DMST, DANS and more.',
  },
  {
    title: 'First-Aid & BLS Bootcamp',
    date: '2026-07-12',
    type: 'Workshop',
    desc: 'Hands-on resuscitation, first aid and trauma response drills for all students.',
  },
];

export const posts = [
  {
    slug: 'best-paramedical-college-shadnagar',
    title: 'Choosing the Best Paramedical College in Shadnagar — A Student Guide',
    category: 'Careers',
    excerpt:
      'What to look for in a paramedical college near Hyderabad — affiliation, practical training, placement support and infrastructure.',
    readTime: '6 min',
    date: '2026-03-12',
  },
  {
    slug: 'dmlt-career-opportunities-telangana',
    title: 'DMLT Career Opportunities in Telangana — 2026 Guide',
    category: 'Careers',
    excerpt:
      'From government hospitals to self-employment — a practical look at where a DMLT diploma can take you in Telangana.',
    readTime: '7 min',
    date: '2026-02-28',
  },
  {
    slug: 'paramedical-government-jobs',
    title: 'Government Jobs for Paramedical Students — Roles & Eligibility',
    category: 'Government Jobs',
    excerpt:
      'A complete list of government paramedical roles — technician posts, multipurpose health workers and more.',
    readTime: '5 min',
    date: '2026-02-04',
  },
  {
    slug: 'self-employment-paramedical',
    title: 'Self-Employment After Paramedical — Diagnostics, Optical & More',
    category: 'Self Employment',
    excerpt:
      'Start your own diagnostic centre, optical shop or specialty service after graduating from a paramedical program.',
    readTime: '5 min',
    date: '2026-01-22',
  },
];

export const faqs = [
  {
    q: 'What is the eligibility for paramedical courses at Sri Sai?',
    a: 'All paramedical courses at Sri Sai Paramedical College require Intermediate (Inter) Pass in any group. There is no science-only restriction for most programs.',
  },
  {
    q: 'How long are the paramedical courses?',
    a: 'All eight paramedical diploma programs at Sri Sai are 2 years in duration, including practical training and hospital exposure.',
  },
  {
    q: 'Is the college affiliated and recognised?',
    a: 'Yes. Sri Sai Paramedical College is affiliated to the Telangana Paramedical Board, and follows curriculum aligned with paramedical standards.',
  },
  {
    q: 'What kind of placement support is provided?',
    a: 'We provide 100% job guidance for eligible students in government and private healthcare institutions, including hospitals, diagnostic centres and clinics. Self-employment guidance is also part of the support.',
  },
  {
    q: 'Can I get a government job after a paramedical diploma?',
    a: 'Yes — graduates are eligible for technician and health-worker posts in Telangana state hospitals, primary health centres, and central health departments based on recruitment notifications.',
  },
  {
    q: 'How do I apply for admission?',
    a: 'Admissions are open. You can apply online through this website, walk in to our Shadnagar campus, or call us at 8341822833 / 9502388678 to speak to our admissions team.',
  },
];

export const admissionSteps = [
  { step: '01', title: 'Submit Inquiry', desc: 'Fill the online inquiry form or call our admissions office at Shadnagar.' },
  { step: '02', title: 'Counseling', desc: 'Speak to our team — choose the right paramedical course for your goals.' },
  { step: '03', title: 'Application', desc: 'Complete the online application with your details and documents.' },
  { step: '04', title: 'Verification', desc: 'Submit your Inter (Any Group) pass certificate and ID for verification.' },
  { step: '05', title: 'Admission Confirmed', desc: 'Pay fees, receive your ID card — welcome to Sri Sai!' },
];
