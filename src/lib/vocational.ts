import {
  Microscope,
  Stethoscope,
  type LucideIcon,
} from 'lucide-react';

export const vocational = {
  name: 'Sri Sai Vocational Junior College',
  shortName: 'Sri Sai Vocational',
  tagline: 'Build Your Healthcare Career After 10th Class',
  description:
    'Sri Sai Vocational Junior College provides career-focused paramedical vocational education with job opportunities, self-employment support and pathways for higher education.',
  highlight:
    'Paramedical courses with 100% job opportunities. Students who have passed — or failed — 10th can achieve a qualification equivalent to Intermediate.',
  eligibility: '10th Pass or Fail',
  duration: '2 Years',
  address: 'Parigi Road, Shadnagar',
  district: 'Rangareddy District, Telangana',
  phone: '+91 83418 22833',
  phoneSecondary: '+91 95023 88678',
  whatsapp: '+918341822833',
  status: 'Admissions Open · Limited Seats',
};

export type VocationalCourse = {
  slug: string;
  code: string;
  title: string;
  description: string;
  duration: string;
  eligibility: string;
  icon: LucideIcon;
  color: string;
  careers: string[];
  higherEd: string[];
  highlight: string;
};

export const vocationalCourses: VocationalCourse[] = [
  {
    slug: 'mlt',
    code: 'M.L.T.',
    title: 'Medical Lab Technician',
    description:
      'After completing this course, students can work as Medical Lab Technicians in government and private hospitals — or establish their own diagnostic centre for self-employment.',
    duration: '2 Years',
    eligibility: '10th Pass / Fail',
    icon: Microscope,
    color: 'from-brand-500 to-teal-500',
    careers: [
      'Medical Lab Technician',
      'Government Hospitals',
      'Corporate Hospitals',
      'Diagnostics Centers',
      'Water Testing Labs',
      'Health Departments',
      '108 & 104 Services',
      'Self Employment',
      'Gulf Opportunities',
    ],
    higherEd: ['B.A.', 'B.Com.', 'B.Sc.', 'B.Sc. MLT', 'Nursing'],
    highlight: 'Students can appear for NEET and EAMCET through Bridge Courses.',
  },
  {
    slug: 'mphw-f',
    code: 'M.P.H.W. (F)',
    title: 'Multi Purpose Health Worker (Female)',
    description:
      'Students are trained for nursing and healthcare services across government and corporate healthcare sectors — with full pathways to B.Sc. Nursing and GNM.',
    duration: '2 Years',
    eligibility: '10th Pass / Fail',
    icon: Stethoscope,
    color: 'from-teal-500 to-brand-500',
    careers: [
      'Government Health Department',
      'Government Hospitals',
      'Corporate Hospitals',
      'Nursing Services',
    ],
    higherEd: ['B.Sc. Nursing', 'GNM', 'B.A.', 'B.Com.', 'B.Sc.'],
    highlight: 'Students can appear for NEET and EAMCET through Bridge Courses.',
  },
];

export const comparison = {
  traditional: {
    title: 'Traditional Intermediate',
    points: [
      'Employment uncertain after 2 years',
      'Degree mandatory for career opportunities',
      'Financial dependency on parents continues',
      'Only a certificate after completion',
      'Must wait 5–6 years for employment',
    ],
  },
  vocational: {
    title: 'Vocational Paramedical Course',
    points: [
      '100% self-employment opportunities',
      'Immediate job opportunities after 2 years',
      'Financial independence — earn while you study',
      'Job + higher education pathways unlocked',
      'Faster career growth from age 18',
    ],
  },
};

export const pathway = [
  { step: '01', title: '10th Class', desc: 'Pass or fail — your healthcare journey can still begin here.' },
  { step: '02', title: 'Vocational Course', desc: '2-year M.L.T or M.P.H.W. (F) at Sri Sai Vocational.' },
  { step: '03', title: 'Job Opportunity', desc: 'Govt / Private hospital, diagnostic centre or self-employment.' },
  { step: '04', title: 'Degree Education', desc: 'B.Sc. MLT, B.Sc. Nursing, GNM or general B.A./B.Com./B.Sc.' },
  { step: '05', title: 'Advanced Career', desc: 'Specialist, supervisor or healthcare entrepreneur.' },
];

export const vocationalFeatures = [
  { title: '100% Job Opportunities', desc: 'Direct placement support in government and private healthcare.' },
  { title: 'Government Job Pathways', desc: 'Eligibility for Telangana state health-worker and technician posts.' },
  { title: 'Self Employment Support', desc: 'Skills to open your own diagnostic centre or healthcare service.' },
  { title: 'Financial Independence', desc: 'Earn from age 18 — no need to wait for a degree.' },
  { title: 'Higher Education Support', desc: 'Continue B.Sc., B.A., B.Com., GNM or B.Sc. Nursing alongside work.' },
  { title: 'NEET & EAMCET Eligibility', desc: 'Eligible through Bridge Courses — keep medical aspirations alive.' },
  { title: 'Practical Healthcare Training', desc: 'Hands-on lab, nursing and patient-care training from day one.' },
  { title: 'Affordable Career Education', desc: 'Career-grade education at a fraction of degree-college costs.' },
];

export const futureCareer = [
  { title: 'Government Healthcare Jobs', desc: 'Technician and health-worker posts in state hospitals and PHCs.' },
  { title: 'Corporate Hospital Careers', desc: 'Roles in Apollo, KIMS, Yashoda-type chains and specialty clinics.' },
  { title: 'Diagnostic Centres', desc: 'Lab, imaging and cardiac diagnostic technician roles.' },
  { title: 'Nursing Opportunities', desc: 'Pathway into nursing services and GNM / B.Sc. Nursing.' },
  { title: 'Self-Employment', desc: 'Open your own diagnostic centre, vision care or sample collection unit.' },
  { title: 'Healthcare Entrepreneurship', desc: 'Build diagnostic franchises and specialty service brands.' },
  { title: 'Abroad Opportunities', desc: 'Demand for trained paramedical professionals across the Gulf.' },
  { title: '108 & 104 Services', desc: 'Emergency response and tele-medical services across Telangana.' },
];

export const vocationalStats = [
  { label: 'Year Vocational Programs', value: 2, suffix: ' Yr' },
  { label: 'Career Opportunities', value: 100, suffix: '%' },
  { label: 'Govt & Private Job Paths', value: 50, suffix: '+' },
  { label: 'Higher Education Pathways', value: 6, suffix: '+' },
];
