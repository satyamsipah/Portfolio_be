import type {
  NavLink, HeroData, AboutData, EducationData, SkillTab,
  BiochemCard, Project, ExperienceEntry, Achievement,
  ResearchVision, Profile, ContactInfo
} from '@/types'

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export const heroData: HeroData = {
  name: 'Satyam Maddheshiya',
  roles: [
    'Biochemical Engineer',
    'Full-Stack Developer',
    'AI Explorer',
    'Bioprocess Researcher',
  ],
  tagline:
    'Building at the intersection of biology, code and intelligent systems. From fermentation labs to production databases, engineer solutions end to end.',
  stats: [
    { value: 3, suffix: '+', label: 'Projects' },
    { value: 3, suffix: '+', label: 'Years Learning' },
    { value: 10, suffix: '+', label: 'Technologies' },
  ],
  photo: '/images/hero-photo.jpg',
  photoAlt: 'Satyam Maddheshiya – Biochemical Engineer & Developer',
  githubUrl: 'https://github.com/satyamsipah',
  linkedinUrl: 'https://www.linkedin.com/in/satyam-maddheshiya',
  instagramUrl: 'https://www.instagram.com/satyam.0608',
  email: '230101041@hbtu.ac.in',
}

export const aboutData: AboutData = {
  paragraphs: [
    "I'm Satyam Maddheshiya, a Biochemical Engineering student at HBTU Kanpur transitioning into full stack software engineering and AI driven systems. My unique background sits at the crossroads of biological sciences and computational thinking, I understand both fermentation kinetics and REST APIs.",
    "I believe the next generation of biotech breakthroughs will come from engineers who speak both the language of biology and code. That's the engineer I'm becoming one who can design a batch fermentation process in the morning and ship a production API in the afternoon.",
  ],
  highlights: [
    {
      icon: '🧬',
      title: 'Bioprocess Knowledge',
      description: 'Fermentation, enzyme kinetics, microbial techniques, wastewater characterization',
    },
    {
      icon: '💻',
      title: 'Full-Stack Dev',
      description: 'MERN stack, Next.js, REST APIs, MongoDB, Tailwind, Vercel deployments',
    },
    {
      icon: '🤖',
      title: 'AI Curious',
      description: 'LLM integration, prompt engineering, AI agents, computational bioprocess modeling',
    },
  ],
  photo: '/images/about-photo.jpg',
  photoAlt: 'Satyam speaking at GCC Innovation Summit 2025',
  casualPhoto: '/images/casual-photo.jpg',
  casualPhotoAlt: 'Satyam Maddheshiya',
}


export const educationData: EducationData = {
  institution: 'Harcourt Butler Technical University, Kanpur',
  degree: 'B.Tech — Biochemical Engineering',
  duration: 'July 2023 – May 2027',
  cgpa: '7.1 / 10',
  location: 'Kanpur, Uttar Pradesh, India',
  coursework: [
    'Bioprocess Engineering',
    'Fermentation Technology',
    'Downstream Processing',
    'Enzyme Engineering',
    'Chemical Reaction Engineering',
    'Industrial Microbiology',
    'Bioinformatics',
    'Heat & Mass Transfer',
    'Instrumentation & Process Control',
    'Biochemistry',
  ],
  activities: [
    { icon: '♟️', text: 'Associate Head – Chess Club' },
    { icon: '🌱', text: 'Volunteer – NSS Club' },
    { icon: '🏸', text: 'Badminton Player' },
  ],
}

export const skillsData: SkillTab[] = [
  {
    id: 'bio',
    label: 'Bioengineering',
    skills: [
      { name: 'Submerged & Solid-State Fermentation', level: 85, category: 'bio' },
      { name: 'Microbial Isolation & Staining', level: 80, category: 'bio' },
      { name: 'Media & Buffer Preparation', level: 90, category: 'bio' },
      { name: 'Enzyme Kinetics (M-M, Lineweaver-Burk)', level: 80, category: 'bio' },
      { name: 'UV-Vis Spectrophotometry', level: 85, category: 'bio' },
      { name: 'Wastewater Characterization (BOD, COD)', level: 75, category: 'bio' },
      { name: 'Mass Transfer (KLa)', level: 70, category: 'bio' },
      { name: 'MATLAB', level: 65, category: 'bio' },
      { name: 'Aspen Plus', level: 60, category: 'bio' },
      { name: 'Origin', level: 70, category: 'bio' },
    ],
  },
  {
    id: 'programming',
    label: 'Programming',
    skills: [
      { name: 'Python', level: 80, category: 'programming' },
      { name: 'NumPy / Pandas / Matplotlib', level: 75, category: 'programming' },
      { name: 'SciPy', level: 70, category: 'programming' },
      { name: 'JavaScript (ES6+)', level: 80, category: 'programming' },
      { name: 'C / C++', level: 70, category: 'programming' },
      { name: 'SQL / MySQL', level: 70, category: 'programming' },
    ],
  },
  {
    id: 'fullstack',
    label: 'Full-Stack',
    skills: [
      { name: 'React.js / Next.js', level: 80, category: 'fullstack' },
      { name: 'Node.js / Express.js', level: 75, category: 'fullstack' },
      { name: 'MongoDB', level: 75, category: 'fullstack' },
      { name: 'REST APIs', level: 80, category: 'fullstack' },
      { name: 'Tailwind CSS', level: 85, category: 'fullstack' },
      { name: 'HTML5 / CSS3', level: 85, category: 'fullstack' },
      { name: 'Git / GitHub', level: 80, category: 'fullstack' },
      { name: 'Vercel / Render', level: 75, category: 'fullstack' },
      { name: 'Docker', level: 55, category: 'fullstack' },
      { name: 'Cloudinary', level: 65, category: 'fullstack' },
    ],
  },
  {
    id: 'ai',
    label: 'AI & Tools',
    skills: [
      { name: 'Prompt Engineering', level: 80, category: 'ai' },
      { name: 'LLM Integration', level: 70, category: 'ai' },
      { name: 'AI Agents (Exploration)', level: 60, category: 'ai' },
      { name: 'Power BI', level: 60, category: 'ai' },
      { name: 'MS Excel', level: 75, category: 'ai' },
      { name: 'VS Code / Postman', level: 85, category: 'ai' },
    ],
  },
]

export const biochemExpertise: BiochemCard[] = [
  {
    emoji: '🦠',
    title: 'Fermentation Technology',
    description: 'Batch & fed-batch fermentation processes',
    bullets: [
      'Ethanol / citric acid / vinegar production',
      'S. cerevisiae optimization',
      'Aseptic inoculation & media formulation',
    ],
  },
  {
    emoji: '⚗️',
    title: 'Downstream Processing',
    description: 'Product recovery & purification',
    bullets: [
      'Centrifugation & filtration techniques',
      'Chromatography (TLC, paper)',
      'Product recovery efficiency calculations',
    ],
  },
  {
    emoji: '🔬',
    title: 'Enzyme Engineering',
    description: 'Kinetics & activity analysis',
    bullets: [
      'Michaelis-Menten kinetics & inhibition',
      'pH / temperature / substrate activity curves',
      'Non-linear SciPy curve fitting',
    ],
  },
  {
    emoji: '🧫',
    title: 'Microbiology',
    description: 'Isolation & characterization',
    bullets: [
      'Gram / acid-fast / negative staining',
      'Streak plate, serial dilution, OD growth curves',
      'Dry-weight cell quantification',
    ],
  },
  {
    emoji: '📊',
    title: 'Bioprocess Analysis',
    description: 'Data analysis & modeling',
    bullets: [
      'Mass balance & yield calculations',
      'KLa & Monod kinetics',
      'Python-based data analysis & visualization',
    ],
  },
  {
    emoji: '💧',
    title: 'Environmental Bioengineering',
    description: 'Wastewater characterization',
    bullets: [
      'BOD, COD, MLSS, TSS, TDS analysis',
      'Activated sludge process understanding',
      'Environmental compliance metrics',
    ],
  },
  {
    emoji: '🖥️',
    title: 'Simulation & Modeling',
    description: 'Computational tools',
    bullets: [
      'MATLAB & Aspen Plus simulations',
      'Python (SciPy) bioprocess modeling',
      'Computational parameter optimization',
    ],
  },
  {
    emoji: '🔭',
    title: 'Instrumentation',
    description: 'Lab equipment proficiency',
    bullets: [
      'UV-Vis spectrophotometer, bench fermenter',
      'Autoclave, centrifuge, pH meter, incubator',
      'Data acquisition & logging',
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'bioethanol',
    title: 'Bioethanol Production from Agro-waste',
    subtitle: 'Submerged Fermentation | Bioprocess Engineering',
    tag: '🔬 Laboratory Research',
    tagColor: 'green',
    description:
      'Designed and executed a complete batch submerged fermentation process converting sugar-rich agro-residues into bioethanol using Saccharomyces cerevisiae. Performed substrate preparation, aseptic media formulation, active inoculum development, and systematic optimization of process parameters (pH, temperature, inoculum size, substrate concentration). Tracked microbial growth via UV-Vis OD and residual sugar via DNS assay. Closed mass balance to report ethanol yield, volumetric productivity, and fermentation efficiency.',
    tech: ['Fermentation', 'DNS Assay', 'UV-Vis', 'Mass Balance', 'S. cerevisiae', 'Bioprocess'],
    demoUrl: '#',
    githubUrl: 'https://github.com/satyamsipah',
  },
  {
    id: 'toolkit',
    title: 'Fermentation Kinetics & Enzyme Analysis Toolkit',
    subtitle: 'Python · NumPy · SciPy · Matplotlib',
    tag: '💻 Software + Bioengineering',
    tagColor: 'cyan',
    description:
      'Built a Python-based computational toolkit to automate bioprocess laboratory data analysis. Implements Michaelis-Menten constant estimation via Lineweaver-Burk linearization and non-linear SciPy curve fitting, Monod growth parameter extraction from batch growth profiles, KLa computation, and enzyme activity trend visualization across pH/temperature/substrate conditions. Generates publication-quality plots and summary reports, significantly cutting manual analysis time.',
    tech: ['Python', 'NumPy', 'SciPy', 'Matplotlib', 'Enzyme Kinetics', 'Monod Model', 'KLa'],
    demoUrl: '#',
    githubUrl: 'https://github.com/satyamsipah',
  },
  {
    id: 'future',
    title: 'AI-Powered Bioprocess Optimizer',
    subtitle: 'Machine Learning · Fermentation Control',
    tag: '🤖 Coming Soon',
    tagColor: 'violet',
    description:
      'Building an ML model to predict optimal fermentation parameters and automate bioprocess control. Will integrate real-time sensor data with predictive models to maximize yield and minimize experiment cycles — coming 2025.',
    tech: ['Python', 'TensorFlow', 'IoT', 'Bioprocess Control', 'ML'],
    demoUrl: '#',
    githubUrl: '#',
    isFuture: true,
  },
]

export const experience: ExperienceEntry[] = [
  {
    period: '2023 – Present',
    title: 'Academic Laboratory Training',
    org: 'HBTU – Dept. of Biochemical Engineering',
    type: 'academic',
    bullets: [
      'Microbial Techniques Lab: Simple, Gram, acid-fast, negative staining; streak/pour/spread plate isolation; serial dilution and OD/dry-weight cell quantification.',
      'Bioprocess Engineering Lab: Michaelis-Menten & Monod kinetics, enzyme activity studies (pH/temp/substrate), KLa determination, batch fermentations (ethanol, citric acid, vinegar).',
      'Instrumentation: UV-Vis spectrophotometer, bench fermenter, centrifuge, autoclave, pH meter, incubator.',
      'Environmental Lab: BOD, COD, MLSS, TSS, TDS characterization of wastewater samples.',
    ],
  },
  {
    period: '2025',
    title: 'E-SDP Cybersecurity Program',
    org: 'IIT Kanpur',
    type: 'certification',
    bullets: [
      'Completed Advanced E-SDP on Cybersecurity Essentials for Entrepreneurship.',
      'Sponsored by Ministry of MSME, Govt. of India.',
      'Covered network security, threat modeling, secure system design, and entrepreneurship in cybersecurity.',
    ],
  },
]

export const achievements: Achievement[] = [
  {
    emoji: '🏆',
    title: 'CHEM-TECHNOVA & GENESIS',
    org: 'International Chemical Technology Competition',
    description:
      'Represented HBTU at international chemical technology competition and national technical fest alongside national and international institutions.',
  },
  {
    emoji: '📜',
    title: 'NPTEL Soft Skills Certification',
    org: 'IIT Roorkee | Top Percentile Nationally',
    description:
      '12-week curriculum covering professional communication, leadership, and high-impact presentations. Achieved top national percentile ranking.',
  },
  {
    emoji: '💡',
    title: 'Smart India Hackathon 2025',
    org: "India's Largest National Hackathon",
    description:
      "Participated in India's premier hackathon. Delivered working prototypes under tight constraints, collaborating with cross-functional teams.",
  },
  {
    emoji: '🔐',
    title: 'IIT Kanpur Cybersecurity E-SDP',
    org: 'Ministry of MSME, Govt. of India',
    description:
      'Completed advanced program on Cybersecurity Essentials for Entrepreneurship, sponsored by the Ministry of MSME, Govt. of India.',
  },
]

export const researchVision: ResearchVision[] = [
  {
    emoji: '🧬',
    title: 'AI for Bioprocess Optimization',
    description:
      'ML models predicting fermentation outcomes, reducing experimentation cycles and accelerating biotech research through intelligent parameter optimization.',
  },
  {
    emoji: '🤖',
    title: 'Intelligent Laboratory Systems',
    description:
      'Automated data collection, IoT sensors in labs, real-time bioprocess monitoring — bridging physical experimentation with digital intelligence.',
  },
  {
    emoji: '💊',
    title: 'Computational Drug Discovery',
    description:
      'Using Python and AI to model enzyme-drug interactions and screen potential compounds — making drug discovery faster and more data-driven.',
  },
  {
    emoji: '🌿',
    title: 'Sustainable Bioengineering',
    description:
      'Agro-waste valorization, green chemistry, circular bioeconomy solutions — engineering for a planet that stays liveable.',
  },
]

export const profiles: Profile[] = [
  {
    platform: 'GitHub',
    handle: 'satyamsipah',
    url: 'https://github.com/satyamsipah',
    color: '#333',
    iconKey: 'github',
  },
  {
    platform: 'LinkedIn',
    handle: 'satyam-maddheshiya',
    url: 'https://www.linkedin.com/in/satyam-maddheshiya',
    color: '#0077b5',
    iconKey: 'linkedin',
  },
  {
    platform: 'Instagram',
    handle: 'satyam.0608',
    url: 'https://www.instagram.com/satyam.0608',
    color: '#00d4ff',
    iconKey: 'instagram',
  },
  {
    platform: 'Email',
    handle: '230101041@hbtu.ac.in',
    url: 'mailto:230101041@hbtu.ac.in',
    color: '#00d4ff',
    iconKey: 'email',
  },
]

export const contactInfo: ContactInfo = {
  email: '230101041@hbtu.ac.in',
  phone: '+91-8094950363',
  location: 'HBTU Kanpur, Uttar Pradesh, India',
  formspreeEndpoint: `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID ?? 'YOUR_FORM_ID'}`,
}
