import goaUniversityLogo from './assets/University.jpg';
import stXaviersCollegeLogo from './assets/college.jpg';
import stXaviersHigherSecondaryLogo from './assets/college.jpg';
import stAnthonyHighSchoolLogo from './assets/school.jpg';
import { SiMongodb, SiReact, SiNodedotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiPostman, SiNextdotjs } from 'react-icons/si';
import { FaGitAlt, FaBootstrap, FaJava } from 'react-icons/fa';



export const personalDetails = {
    name: "Rahul Bandekar",
    address: "Sangolda, Bardez-Goa, India",
    phone: "+917776821343",
    email: "rahulbandekar12@gmail.com",
    socialLinks: [
      { label: "LinkedIn", link: "https://linkedin.com/in/rahulbandekar" },
      { label: "GitHub", link: "https://github.com/rahulbandekar" },
      { label: "Portfolio", link: "https://www.rahulbandekar.tech" },
    ],
  };
  
  export const educationData = [
    {
      school: "Goa University",
      degree: "Master of Computer Applications",
      year: "2023 - 2025",
      logo: goaUniversityLogo,
    },
    {
      school: "St. Xavier’s College, Goa",
      degree: "Bachelor of Computer Application",
      year: "2019 - 2022",
      logo: stXaviersCollegeLogo,
    },
    {
      school: "St. Xavier's Higher Secondary School",
      degree: "HSSC in Accountancy & Auditing",
      year: "2017 - 2019",
      logo: stXaviersHigherSecondaryLogo,
    },
    {
      school: "St. Anthony High School",
      degree: "SSC",
      year: "2016 - 2017",
      logo: stAnthonyHighSchoolLogo,
    },
  ];
  
  export const experienceData = [
    {
      role: "Customer Care Officer",
      company: "Xiaomi India",
      duration: "Sep 2022 – Mar 2023",
      location: "Mapusa, Goa, India",
      responsibilities: [
        "Improved customer experience by conducting monthly feedback sessions, leading to a 25% increase in positive customer feedback.",
        "Maintained a customer satisfaction rating above 90%, contributing to a 15% increase in customer retention rates.",
      ],
    },
  ];
  
  export const projectsData = [
    {
      name: "Plan It Now",
      technologies: "NextJs, MongoDB",
      logos: [<SiNextdotjs className="text-black" />, <SiMongodb className="text-green-500" />],
      description: [
        "Developed a comprehensive web application to streamline the event planning process by connecting vendors and customers on a single platform.",
        "Enabled users to browse and book a wide range of event services, providing a seamless and integrated solution for event planning.",
      ],
    },
    {
      name: "MeetHub",
      technologies: "NextJs, TypeScript",
      logos: [<SiNextdotjs className="text-black" />, <SiTypescript className="text-blue-500" />],
      description: [
        "Implemented real-time features such as live recording and screen sharing, increasing user engagement.",
        "Integrated Clerk for secure authentication, reducing unauthorized access by 95%.",
      ],
    },
  ];
  
  export const certificatesData = [
    {
      name: "Introduction to Generative AI",
      provider: "Google",
      link: "https://www.cloudskillsboost.google/public_profiles/2840b817-45da-4b05-9b8f-cb7c1fffa434/badges/7073288",
    },
    {
      name: "Coding: Development & Advanced Engineering Job Simulation",
      provider: "Accenture North America via Forage",
      link: "https://drive.google.com/file/d/19qeXbdrgSuNCNY5CLOMq-dLB14I9C2FG/view?usp=sharing",
    },
    {
      name: "Agile for Beginners",
      provider: "Great Learning",
      link: "https://olympus.mygreatlearning.com/courses/91534/certificate",
    },
    {
      name: "Search Engine Optimization (SEO) with Squarespace",
      provider: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/certificate/A3FGC27V573V",
    },
    {
      name: "Design Thinking for Beginners",
      provider: "Great Learning",
      link: "https://olympus.mygreatlearning.com/courses/64910/certificate",
    },
    {
      name: "The Complete 2024 Web Development Bootcamp",
      provider: "Udemy",
      link: "https://www.udemy.com/certificate/UC-de0cc534-d274-4642-8a5d-fc63350609a5/",
    },
    {
      name: "Introduction to DevOps",
      provider: "Great Learning",
      link: "https://olympus.mygreatlearning.com/courses/38652/certificate",
    },
  ];
  

  export const skillsData = [
    { name: "MongoDB", logo: <SiMongodb className="text-green-500" /> },
    { name: "React", logo: <SiReact className="text-blue-500" /> },
    { name: "Node.js", logo: <SiNodedotjs className="text-green-500" /> },
    { name: "TypeScript", logo: <SiTypescript className="text-blue-500" /> },
    { name: "JavaScript", logo: <SiJavascript className="text-yellow-500" /> },
    { name: "HTML5", logo: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS3", logo: <SiCss3 className="text-blue-500" /> },
    { name: "Tailwind CSS", logo: <SiTailwindcss className="text-blue-500" /> },
    { name: "Bootstrap", logo: <FaBootstrap className="text-purple-500" /> },
    { name: "Git", logo: <FaGitAlt className="text-red-500" /> },
    { name: "Postman", logo: <SiPostman className="text-orange-500" /> },
    { name: "Java", logo: <FaJava className="text-red-500" /> }
  ];