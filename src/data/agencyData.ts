import { FAQItem, ServiceItem, TeamMember, ProjectItem } from '../types';

export const AGENCY_INFO = {
  name: "SPARK STATION",
  headline: "We Build Digital Solutions That Work",
  subheadline: "Helping startups, businesses, and creators build, grow, and scale online. From web apps to brand identities — we deliver results.",
  copyright: "© 2026 Spark Station. All rights reserved.",
  whatsapp: "+91 9111376314",
  whatsappUrl: "https://wa.me/919111376314?text=Hi%2C%20I%27d%20like%20a%20free%20consultation",
  call: "+91 9111376314",
  callSaksham: "+91 9111376314",
  callManas: "+91 9111376314",
  email: "sparkstation.x@gmail.com"
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'electronics-shop',
    slug: 'shrinit-enterprises',
    title: 'Shrinit Enterprises',
    category: 'web',
    desc: 'Comprehensive e-commerce platform for retail electronics, featuring streamlined catalog management and secure checkout.',
    tags: ['React', 'E-commerce'],
    liveUrl: 'https://shrinit-enterprisess.vercel.app/',
    image: 'https://images.unsplash.com/photo-1542332213-9b5a5a81a4b1?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'chiranjivi-clinic',
    slug: 'chiranjivi-clinic',
    title: 'Chiranjivi Clinic',
    category: 'web',
    desc: 'Patient-centric medical service portal facilitating seamless appointment scheduling and digital health record management.',
    tags: ['React', 'Healthcare'],
    liveUrl: 'https://chiranjeevi-clinic.vercel.app/',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'jhansi-empire',
    slug: 'jhansi-empire',
    title: 'Jhansi Empire',
    category: 'web',
    desc: 'Professional real estate and housing society management portal showcasing residential property listings.',
    tags: ['Real Estate', 'Management'],
    liveUrl: 'https://jhansi-empire-frontend.vercel.app/',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'advance-property',
    slug: 'advance-property-construction',
    title: 'Advance Property Construction',
    category: 'web',
    desc: 'Modern construction company website featuring project portfolios and service capabilities for commercial and residential developments.',
    tags: ['Construction', 'Portfolio'],
    liveUrl: 'https://advance-property-frontend.vercel.app/',
    image: 'https://images.unsplash.com/photo-1503387762-592dfe58ef4a?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'shayona-space',
    slug: 'shayona-space',
    title: 'Shayona Space',
    category: 'web',
    desc: 'High-end real estate property showcase platform focused on architectural aesthetics and luxury living spaces.',
    tags: ['Real Estate', 'Luxury'],
    liveUrl: 'https://shayona-space-1.vercel.app/',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'futura-groups',
    slug: 'futura-groups',
    title: 'Futura Groups',
    category: 'web',
    desc: 'Strategic real estate development portal designed for high-volume property listings and investor engagement.',
    tags: ['Real Estate', 'Investment'],
    liveUrl: 'https://futura-groups-0.vercel.app/',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'pavitra-mobiles',
    slug: 'pavitra-mobiles',
    title: 'Pavitra Mobiles',
    category: 'web',
    desc: 'Mobile phone retailer portal showcasing latest gadgets and accessories.',
    tags: ['Retail', 'Mobile'],
    liveUrl: 'https://pavitra-mobile.vercel.app/',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'happy-tooth',
    slug: 'happy-tooth',
    title: 'Happy Tooth',
    category: 'web',
    desc: 'Dental clinic appointment and services portal for comprehensive dental care.',
    tags: ['Healthcare', 'Dental'],
    liveUrl: 'https://happy-tooth-frontend.vercel.app/',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'adarsh-gupta',
    slug: 'adarsh-gupta-ca',
    title: 'Adarsh Gupta CA',
    category: 'web',
    desc: 'Professional Chartered Accountant portal providing financial services and advisory.',
    tags: ['Finance', 'Professional'],
    liveUrl: 'https://gupta-adarsh-co.vercel.app/',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'real-estate',
    slug: 'real-estate-portal',
    title: 'Real Estate',
    category: 'web',
    desc: 'Property listing and management platform for commercial and residential real estate.',
    tags: ['Real Estate'],
    liveUrl: 'https://real-estate-livid-psi.vercel.app/',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'abati',
    slug: 'abati-living',
    title: 'Abati',
    category: 'web',
    desc: 'Real estate development and property showcase for modern living.',
    tags: ['Real Estate'],
    liveUrl: 'https://abati-website.vercel.app/',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80'
  }
];

export const TRUSTED_BADGES = [
  "TechStartup Co.",
  "LocalBiz Hub",
  "Creator Studio",
  "ScaleUp Ventures",
  "Digital Agency X"
];

export const PROBLEMS = [
  "Outdated or non-existent digital presence",
  "Poor user experience losing potential customers",
  "Slow, buggy applications damaging your brand",
  "Lack of technical expertise on your team",
  "High agency costs with low-quality results"
];

export const SOLUTIONS = [
  "Modern, fast websites & digital solutions built to convert",
  "UX-first design that delights your users",
  "Clean, maintainable code that scales",
  "A dedicated expert team behind every project",
  "Transparent, fair pricing with real results"
];

export const PILLARS = [
  {
    icon: "Zap",
    title: "Fast Delivery",
    desc: "We move quickly without cutting corners. Your deadlines are our deadlines."
  },
  {
    icon: "CodeXml",
    title: "Quality Code",
    desc: "Clean, documented, maintainable code. Built to last and scale."
  },
  {
    icon: "TrendingUp",
    title: "Custom Pricing",
    desc: "No cookie-cutter packages. Fair, transparent quotes tailored to you."
  },
  {
    icon: "Users",
    title: "Ongoing Support",
    desc: "We don't disappear after launch. We're here for the long haul."
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "web-dev-seo",
    slug: "web-development-seo-performance",
    title: "Website Development, SEO & Performance Optimization",
    desc: "High-performance websites built with React, Next.js, and modern tools paired with advanced technical SEO audits, core web vitals optimization, and organic search ranking campaigns.",
    iconName: "CodeXml",
    color: "#58A6FF",
    benefits: ["Sub-Second Page Speed", "Complete SEO Management", "Clean TypeScript & React", "Core Web Vitals Optimization"],
    useCases: ["SaaS Landing Pages", "E-Commerce Stores", "High Competition Niches", "National & Local SEO"]
  },
  {
    id: "ui-ux",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    desc: "Intuitive, conversion-focused design systems, prototypes, and user interfaces that delight your customers.",
    iconName: "Layout",
    color: "#F778BA",
    benefits: ["User Research", "Wireframing", "Interactive Prototypes", "Design Systems"],
    useCases: ["Redesign Projects", "New App Concepts", "Landing Page CRO", "Brand Guidelines"]
  },
  {
    id: "branding-product",
    slug: "branding-identity-product-design",
    title: "Branding, Identity & Product Design",
    desc: "Distinctive logos, color palettes, typography, and complete brand guidelines combined with end-to-end product design from MVP ideation to wireframes and user journey maps.",
    iconName: "Palette",
    color: "#34D399",
    benefits: ["Logo & Brand Book", "Product Strategy", "Rapid Prototyping", "User Journey Maps"],
    useCases: ["Rebranding", "New Startups", "Pitch Decks", "Beta Launches"]
  },
  {
    id: "ecommerce",
    slug: "e-commerce-solutions",
    title: "E-Commerce Solutions",
    desc: "Scalable online stores with seamless checkout, payment gateway integrations, and robust inventory management.",
    iconName: "ShoppingBag",
    color: "#38BDF8",
    benefits: ["Stripe & Razorpay", "Custom Cart Logic", "Order Tracking", "Admin Dashboard"],
    useCases: ["D2C Brands", "Digital Downloads", "Subscription Boxes", "B2B Wholesale"]
  },
  {
    id: "consultancy",
    slug: "technical-consultancy",
    title: "Technical Consultancy",
    desc: "Architecture reviews, tech stack selection, cloud infrastructure setup, and technical leadership for growing engineering teams.",
    iconName: "Cpu",
    color: "#EC4899",
    benefits: ["Code Audits", "Scalability Planning", "Security Reviews", "Cost Optimization"],
    useCases: ["Scaling Architecture", "CTO Advisory", "Tech Stack Migration", "Cloud Deployment"]
  }
];

export const FAQS: FAQItem[] = [
  {
    q: "How much does a project cost?",
    a: "We provide custom quotes based on your specific requirements, scope, and timeline. Contact us for a free consultation and we'll give you a transparent breakdown."
  },
  {
    q: "How long does a typical project take?",
    a: "Timelines vary by project complexity. A landing page might take 1-2 days, while a full web app can take 4-5days or maximum 1 week . We'll give you an exact estimate during consultation."
  },
  {
    q: "Do you work with startups?",
    a: "Absolutely. We love working with early-stage startups and have tailored packages to help you build your MVP and scale."
  },
  {
    q: "Will I own the code and designs?",
    a: "Yes, 100%. Upon project completion and final payment, all code, designs, and assets belong to you entirely."
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes, we offer maintenance and support packages so your product stays up-to-date, secure, and running smoothly."
  },
  {
    q: "What information do you need to get started?",
    a: "A brief description of your project, target audience, rough timeline, and any reference sites or designs you like. That's all we need for an initial consultation."
  }
];

export const TEAM: TeamMember[] = [
  {
    slug: "saksham-pandey",
    name: "Saksham Pandey",
    role: "Founder & CEO",
    bio: "Building high-quality digital products and trusted technology solutions. Specialized in responsive web development and Cybersecurity.",
    tagline: "Security-First Web Developer & Cybersecurity Architect.",
    aboutLong: "I am Saksham Pandey, Founder of Spark Station. With over 18 months of hands-on experience in modern full-stack web development and more than 4 years of deep involvement in cybersecurity, I specialize in engineering highly performant, accessible, and ultra-secure web applications. I believe that elegant design must be backed by bulletproof code and military-grade security.",
    experience: "18+ Months Web / 4+ Years Security",
    contact: "founder", // custom flag to trigger founder page routing
    skills: ["Web Development", "Cybersecurity", "UI/UX Design", "Linux", "React / Vite", "Node.js", "Penetration Testing"],
    color: "#58A6FF",
    avatarUrl: "/saksham.png",
    responsibilities: [
      "Full-Stack Web Development",
      "Cybersecurity Auditing & Hardening",
      "Infrastructure Setup & Cloud Deployment",
      "Technical Architecture & System Design"
    ],
    experienceList: [
      {
        role: "Founder & CEO",
        company: "Spark Station",
        period: "2024 - Present",
        desc: "Leading Spark Station to deliver premium-grade web systems, branding, and strategic marketing campaigns."
      },
      {
        role: "Cybersecurity Analyst & Developer",
        company: "Freelance",
        period: "2020 - Present",
        desc: "Performed extensive web application penetration testing, system hardening, and secure custom software engineering."
      }
    ],
    socials: {
      email: "sparkstation.x@gmail.com",
      linkedin: "https://in.linkedin.com/in/sakshampandeyin",
      twitter: "https://x.com/crazy_saksham",
      instagram: "https://www.instagram.com/sakshampandey.x/",
      snapchat: "https://www.snapchat.com/@sakshampande.x?share_id=_KJ6klHB2G0&locale=en-IN",
      whatsapp: "https://wa.me/919111376314",
      github: "https://github.com/protechnicalguruji"
    }
  },
  {
    slug: "abhinav-sharma",
    name: "Abhinav Sharma",
    role: "Developer",
    bio: "Specializing in modern web applications, React engineering, and building responsive, high-performance digital experiences.",
    tagline: "Full-Stack Software Developer & Web Systems Specialist.",
    aboutLong: "Abhinav Sharma is a Software Developer at Spark Station. Passionate about building modern, fast, and scalable web applications, Abhinav specializes in React, TypeScript, modern CSS frameworks, and backend integrations. He brings clean code discipline and a user-focused engineering mindset to every client project.",
    experience: "Full-Stack Development",
    contact: "mailto:abhinav@sparkstation.agency",
    skills: ["Full-Stack Development", "React", "TypeScript", "Tailwind CSS", "JavaScript", "Node.js", "API Integration", "UI Engineering"],
    color: "#38BDF8",
    avatarUrl: "/abhinav.jpeg",
    responsibilities: [
      "Modern Web Application Development",
      "Frontend Architecture & UI Engineering",
      "API Integration & Performance Optimization",
      "Responsive Cross-Browser Interface Design"
    ],
    experienceList: [
      {
        role: "Software Developer",
        company: "Spark Station",
        period: "2024 - Present",
        desc: "Engineering modern high-performance web applications, responsive user interfaces, and custom digital solutions for clients."
      }
    ],
    socials: {
      email: "sparkstation.x@gmail.com",
      linkedin: "https://www.linkedin.com",
      github: "https://github.com"
    }
  },
  {
    slug: "sanidhya-yadav",
    name: "Sanidhya Yadav",
    role: "Business Development & Client Relations",
    bio: "Handles business networking, strategic partnerships, client communication and relationship management at Spark Station.",
    tagline: "Strategic Partnerships & Client Relations Lead.",
    aboutLong: "Sanidhya Yadav leads Business Development & Client Relations at Spark Station. He is dedicated to creating long-term strategic value for clients through clear communication, relationship management, and business networking. Sanidhya bridges client vision with technical execution.",
    experience: "Business & Client Strategy",
    contact: "mailto:sparkstation.x@gmail.com",
    skills: ["Business Development", "Client Relations", "Strategic Partnerships", "Account Management", "Growth Strategy", "Client Support"],
    color: "#A855F7",
    avatarUrl: "initials:SY",
    responsibilities: [
      "Client Communication & Onboarding",
      "Strategic Business Partnerships",
      "Project Requirement Gathering",
      "Relationship Management & Support"
    ],
    experienceList: [
      {
        role: "Business Development & Client Relations Lead",
        company: "Spark Station",
        period: "2024 - Present",
        desc: "Managing client relations, corporate partnerships, and business development for digital web solutions."
      }
    ],
    socials: {
      email: "sparkstation.x@gmail.com",
      linkedin: "https://www.linkedin.com"
    }
  },
  {
    slug: "ananya-raje-singh",
    name: "Ananya Raje Singh",
    role: "Marketing & Growth Manager",
    bio: "Responsible for digital marketing, brand promotion, social media strategy, SEO campaigns and business growth initiatives.",
    tagline: "Digital Marketing & Growth Strategist.",
    aboutLong: "Ananya Raje Singh is the Marketing & Growth Manager at Spark Station. She specializes in crafting multi-channel digital marketing campaigns, brand positioning, content strategies, and SEO growth tactics that turn client web assets into lead-generation engines.",
    experience: "Digital Marketing & SEO",
    contact: "mailto:sparkstation.x@gmail.com",
    skills: ["Digital Marketing", "Brand Strategy", "Social Media Marketing", "SEO Campaigns", "Growth Hacking", "Content Strategy"],
    color: "#F778BA",
    avatarUrl: "initials:AR",
    responsibilities: [
      "Digital Marketing Campaign Strategy",
      "Social Media & Brand Management",
      "Search Engine Optimization (SEO)",
      "Growth Hacking & Analytics"
    ],
    experienceList: [
      {
        role: "Marketing & Growth Manager",
        company: "Spark Station",
        period: "2024 - Present",
        desc: "Driving digital marketing campaigns, brand awareness, and SEO execution for client projects."
      }
    ],
    socials: {
      email: "sparkstation.x@gmail.com",
      linkedin: "https://www.linkedin.com"
    }
  },
  {
    slug: "aaisha",
    name: "Aaisha",
    role: "Quality Assurance & Testing Lead",
    bio: "Responsible for website testing, bug detection, functionality checks, responsiveness and quality assurance before project delivery.",
    tagline: "Software Quality Assurance & Performance Testing Lead.",
    aboutLong: "Aaisha is the Quality Assurance & Testing Lead at Spark Station. She enforces strict quality standards across all web deliverables through rigorous cross-browser testing, functional audits, performance benchmarking, and bug verification before final deployment.",
    experience: "QA & Software Testing",
    contact: "mailto:sparkstation.x@gmail.com",
    skills: ["Quality Assurance", "Web Testing", "Bug Tracking & Detection", "Responsiveness Audits", "Cross-Browser Compatibility", "UI/UX QA"],
    color: "#34D399",
    avatarUrl: "initials:AA",
    responsibilities: [
      "Website Functionality & Stress Testing",
      "Cross-Device Responsiveness Verification",
      "Bug Detection & Issue Tracking",
      "Pre-Launch Quality Sign-Off"
    ],
    experienceList: [
      {
        role: "Quality Assurance & Testing Lead",
        company: "Spark Station",
        period: "2024 - Present",
        desc: "Leading quality assurance, responsive design testing, and pre-deployment software verification."
      }
    ],
    socials: {
      email: "sparkstation.x@gmail.com",
      linkedin: "https://www.linkedin.com"
    }
  },
  {
    slug: "sherya-jadon",
    name: "Sherya Jadon",
    role: "Marketing & Quality Assurance Associate",
    bio: "Supports marketing campaigns, social media content creation, website testing and quality assurance activities.",
    tagline: "Marketing Operations & Quality Assurance Associate.",
    aboutLong: "Sherya Jadon is a Marketing & Quality Assurance Associate at Spark Station. Combining creative content execution with analytical QA testing, Sherya supports digital marketing campaigns, social media management, and client website testing.",
    experience: "Marketing & QA Support",
    contact: "mailto:sparkstation.x@gmail.com",
    skills: ["Marketing Support", "Social Media Content", "Website Testing", "Quality Assurance", "Content Operations", "User Experience Audit"],
    color: "#F59E0B",
    avatarUrl: "initials:SJ",
    responsibilities: [
      "Social Media Content & Campaign Execution",
      "Website User Experience & Functionality Testing",
      "Marketing Asset Creation & Promotion",
      "Quality Assurance Support & Issue Logging"
    ],
    experienceList: [
      {
        role: "Marketing & QA Associate",
        company: "Spark Station",
        period: "2024 - Present",
        desc: "Supporting digital marketing operations, content creation, and website QA testing."
      }
    ],
    socials: {
      email: "sparkstation.x@gmail.com",
      linkedin: "https://www.linkedin.com"
    }
  }
];

export const SEO_PLAN = {
  title: "Premium Enterprise SEO Plan",
  subtitle: "Full-Scale SEO Campaign & Performance Suite",
  desc: "A highly sophisticated search engine dominance campaign. Designed for companies looking to establish search authority, outrank competitors, leverage voice/AI search, and drive highly qualified inbound leads.",
  features: [
    { name: "60 Target Keywords", category: "Strategy & Core" },
    { name: "Complete SEO Management", category: "Strategy & Core" },
    { name: "Advanced Technical SEO", category: "Technical & Audits" },
    { name: "Local SEO Integration", category: "Technical & Audits" },
    { name: "National SEO Strategy", category: "Strategy & Core" },
    { name: "AI Search Optimization (GEO)", category: "Advanced Optimization" },
    { name: "Voice Search Optimization", category: "Advanced Optimization" },
    { name: "Rich Snippet Optimization", category: "Advanced Optimization" },
    { name: "E-E-A-T Optimization", category: "Advanced Optimization" },
    { name: "12 Premium SEO Blog Articles", category: "Content & Authority" },
    { name: "20 Premium Quality Backlinks", category: "Content & Authority" },
    { name: "Conversion Rate Optimization (CRO) Suggestions", category: "Technical & Audits" },
    { name: "Monthly Competitor Intelligence Report", category: "Reporting & Support" },
    { name: "Monthly Video Performance Report", category: "Reporting & Support" },
    { name: "Priority 24/7 Support", category: "Reporting & Support" },
    { name: "Dedicated SEO Consultant", category: "Reporting & Support" }
  ]
};

