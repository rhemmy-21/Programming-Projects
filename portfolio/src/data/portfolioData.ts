export interface SkillItem {
  name: string;
  category: "programming" | "design" | "productivity" | "systems" | "soft";
  level?: string;
  description?: string;
}

export interface EducationItem {
  period: string;
  institution: string;
  level: "College Education" | "High School Education";
  degree?: string;
  notes?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  department?: string;
  type: "Leadership & Community" | "Internship" | "Curricular";
  description: string[];
  skills: string[];
}

export interface CertificationItem {
  year: string;
  title: string;
  issuer: string;
  category: string;
  details: string;
}

export const portfolioData = {
  personal: {
    name: "Rhem Gelo Marbella",
    role: "Computer Science Student & Cybersecurity Core Lead",
    tagline: "Building clean digital experiences with a focus on web technologies, systems, and security.",
    location: "Parañaque City, Metro Manila, Philippines",
    address: "47 D First Street, Belisario Compound, San Antonio Valley 6, Barangay San Isidro, Parañaque City",
    email: "marbellarhemgelo@gmail.com",
    mobile: "+63 926 549 3110",
    linkedin: "https://www.linkedin.com/in/rhem-gelo-marbella-9608b8346",
    linkedinDisplay: "linkedin.com/in/rhem-gelo-marbella-9608b8346",
    github: "https://github.com/rhemmy-21",
    githubDisplay: "github.com/rhemmy-21",
    status: "Open to Internships, Research & Technical Collaborations",
    bio: "Passionate technologist and student at Technological University of the Philippines - Manila. Currently serving as the Cybersecurity Core Lead for Google Developer Group On Campus - TUP Manila. Combines foundational programming in C, Python, Java, and modern web development with a keen eye for multimedia design and computer systems troubleshooting."
  },

  education: [
    {
      period: "2025 – Present",
      institution: "Technological University of the Philippines - Manila",
      level: "College Education",
      degree: "Undergraduate Studies in Technology / Computer Studies",
      notes: "Active in university tech communities, Google Developer Group leadership, and software engineering coursework."
    },
    {
      period: "2023 – 2025",
      institution: "Parañaque Science High School",
      level: "High School Education",
      degree: "Senior High School - STEM Strand",
      notes: "Rigorous science and mathematics training with foundational programming and research exposure."
    },
    {
      period: "2021 – 2023",
      institution: "Parañaque National High School – Main",
      level: "High School Education",
      degree: "Junior High School",
      notes: "Excellence in technology and computer system servicing fundamentals."
    },
    {
      period: "2018 – 2020",
      institution: "Mary Immaculate School Inc.",
      level: "High School Education",
      degree: "Junior High School",
      notes: "Academic foundation emphasizing character, discipline, and core sciences."
    }
  ] as EducationItem[],

  experience: [
    {
      period: "2026 – 2027",
      role: "Cybersecurity Core Lead",
      organization: "Google Developer Group On Campus - TUP Manila",
      department: "Technology Department",
      type: "Leadership & Community",
      description: [
        "Leads the cybersecurity division, curating technical workshops, security best practice clinics, and CTF challenges for university peers.",
        "Collaborates with community officers to guide students in secure coding practices, ethical hacking awareness, and modern digital defense protocols.",
        "Spearheads tech initiatives and developer talks promoting Google developer tooling and open-source practices."
      ],
      skills: ["Cybersecurity", "Technical Leadership", "Workshop Facilitation", "Community Building"]
    },
    {
      period: "2025 – 2026",
      role: "Googler (Active Core Member)",
      organization: "Google Developer Group On Campus - TUP Manila",
      department: "Community & Events",
      type: "Leadership & Community",
      description: [
        "Contributed to developer outreach programs, campus tech conferences, and student hackathons.",
        "Supported peer mentoring sessions on web basics, git workflows, and software development fundamentals.",
        "Engaged with developers and speakers from tech industries across the Philippines."
      ],
      skills: ["Event Organization", "Developer Relations", "Team Collaboration"]
    },
    {
      period: "2024",
      role: "ICT Intern - File Management & Operations",
      organization: "Parañaque City Hall",
      department: "Information and Communications Technology Office",
      type: "Internship",
      description: [
        "Organized, digitized, and maintained public records and departmental databases ensuring strict data accuracy and fast retrieval.",
        "Assisted administrative and technical staff with computer troubleshooting, software installations, and digital documentation workflows.",
        "Enforced streamlined document naming conventions and secure archiving processes."
      ],
      skills: ["Database & File Management", "IT Operations", "Data Accuracy", "Hardware & Software Troubleshooting"]
    }
  ] as ExperienceItem[],

  certifications: [
    {
      year: "2023",
      title: "Writing Assessment, Interview, and Hands-on Evaluation in Computer System Servicing",
      issuer: "K-12 Curriculum Competency Assessment & Certification System",
      category: "Computer Hardware & System Servicing",
      details: "Comprehensive formal evaluation validating theoretical knowledge and practical proficiency in PC assembly, operating system configuration, networking setup, preventative maintenance, and safety compliance."
    }
  ] as CertificationItem[],

  skills: [
    // Programming
    {
      name: "HTML5 & Modern CSS3",
      category: "programming",
      level: "Core Competency",
      description: "Semantic markup, responsive layouts, Tailwind styling, and modern UI architectures."
    },
    {
      name: "JavaScript (ES6+)",
      category: "programming",
      level: "Proficient",
      description: "Interactive front-end logic, DOM manipulation, asynchronous operations, and modern frameworks."
    },
    {
      name: "Python",
      category: "programming",
      level: "Intermediate",
      description: "Scripting, algorithm implementations, data processing, and automation."
    },
    {
      name: "C Programming",
      category: "programming",
      level: "Foundational",
      description: "Low-level memory management, pointers, algorithm analysis, and systems fundamentals."
    },
    {
      name: "Java",
      category: "programming",
      level: "Intermediate",
      description: "Object-oriented software development, classes, inheritance, and application structures."
    },

    // Multimedia & Graphic Design
    {
      name: "Figma",
      category: "design",
      level: "Advanced",
      description: "UI/UX wireframing, high-fidelity prototypes, component design systems, and vector assets."
    },
    {
      name: "Canva Pro",
      category: "design",
      level: "Expert",
      description: "Branding materials, marketing graphics, event collaterals, and presentation design."
    },
    {
      name: "GIMP Image Manipulation",
      category: "design",
      level: "Proficient",
      description: "Raster image processing, layer masks, photo touch-up, color grading, and asset preparation."
    },
    {
      name: "Blender 3D",
      category: "design",
      level: "Intermediate",
      description: "Basic 3D modeling, asset manipulation, lighting setup, and spatial scene visualization."
    },
    {
      name: "CapCut & Video Production",
      category: "design",
      level: "Proficient",
      description: "Video editing, pacing, social media promos, motion cuts, and audio leveling."
    },
    {
      name: "SmartDraw Programs",
      category: "design",
      level: "Proficient",
      description: "Flowcharts, architectural diagrams, system schematics, and process mapping."
    },

    // Productivity & Cloud Suites
    {
      name: "Microsoft 365 Suite",
      category: "productivity",
      level: "Expert",
      description: "Word, Excel (data modeling, analysis & formulas), PowerPoint, and Outlook for business communication."
    },
    {
      name: "Google Workspace",
      category: "productivity",
      level: "Expert",
      description: "Docs, Sheets, Slides, Drive architecture, Forms, and real-time team collaboration tools."
    },
    {
      name: "Workflow & File Automation",
      category: "productivity",
      level: "Proficient",
      description: "Digital archiving, organized file indexing, cloud storage management, and productivity pipelines."
    },

    // Systems & Hardware
    {
      name: "Computer Hardware Diagnostics",
      category: "systems",
      level: "Certified",
      description: "Component assembly, peripheral testing, power unit troubleshooting, and hardware replacement."
    },
    {
      name: "Software & OS Troubleshooting",
      category: "systems",
      level: "Certified",
      description: "Windows environment repair, driver conflict resolution, malware clearance, and registry cleanup."
    },
    {
      name: "Basic Networking & Servicing",
      category: "systems",
      level: "Certified",
      description: "LAN cable crimping, router configurations, IP addressing, and connectivity troubleshooting."
    },

    // Soft Skills
    {
      name: "Clear Technical Communication",
      category: "soft",
      level: "Key Strength",
      description: "Drafting technical documentation, structured reports, and cross-functional team correspondence."
    },
    {
      name: "Collaboration & Teamwork",
      category: "soft",
      level: "Key Strength",
      description: "Coordinating effectively across agile sprint teams, community chapters, and diverse student bodies."
    },
    {
      name: "Analytical Problem-Solving",
      category: "soft",
      level: "Key Strength",
      description: "Diagnosing complex system issues and crafting structured, sustainable fixes under pressure."
    },
    {
      name: "Critical Thinking",
      category: "soft",
      level: "Key Strength",
      description: "Objective evaluation of technical trade-offs, security postures, and engineering strategies."
    },
    {
      name: "Project Time Management",
      category: "soft",
      level: "Key Strength",
      description: "Prioritizing concurrent deadlines, managing deliverables, and maintaining high output standards."
    }
  ] as SkillItem[]
};
