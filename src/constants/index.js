import {
  mobile,
  backend,
  creator,
  web,
  c,
  cplusplus,
  icons8_java_94,
  icons8_python,
  git,
  illustrator,
  icons8_excel,
  dsa,
  oop,
  icons8_canva,
  mysql,
  css,
  html,
  hultPrizeIcon,
  technopreneurIcon,
  fossIcon,
  storytellingIcon,
  illuminateIcon,
  nlpIcon,
  web3Icon,
  iedcIcon,
  fossmecIcon,
  debateIcon,
  college,
  excel,
  gdc,
  nsdc,
  hawkfort,
  fixitnow,
  placementtracker,
  voteease,
  wyzo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Graphic Designer",
    icon: mobile,
  },
  {
    title: "Collaboration & Git Ready",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "Java",
    icon: icons8_java_94,
  },
  {
    name: "Python",
    icon: icons8_python,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Adove Illustrator",
    icon: illustrator,
  },
  {
    name: "Excel",
    icon: icons8_excel,
  },
  {
    name: "DSA",
    icon: dsa,
  },
  {
    name: "OOP",
    icon: oop,
  },
  {
    name: "Canva",
    icon: icons8_canva,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "HTML",
    icon: html,
  },
];

const experiences = [
  {
    title: "Finalist in Hult Prize MEC 2024",
    company_name: "Govt. Model Engineering College",
    icon: hultPrizeIcon, // replace with your icon import
    iconBg: "#fe8ffeff",
    date: "2024",
    points: [
      "Finalist in Hult Prize MEC 2024, organised by Govt. Model Engineering College."
    ],
  },
  {
    title: "Technopreneur 2023 Attendee",
    company_name: "IEDC MEC",
    icon: technopreneurIcon,
    iconBg: "#000000ff",
    date: "2023",
    points: [
      "Attended Technopreneur 2023, an entrepreneurial summit organised by IEDC MEC."
    ],
  },
  {
    title: "INDIA FOSS Participant",
    company_name: "FOSS",
    icon: fossIcon,
    iconBg: "#383E56",
    date: "2023",
    points: [
      "Participated in INDIA FOSS 2023, a free and open-source software conference organised by FOSS."
    ],
  },
  {
    title: "Pitching & Storytelling Workshop",
    company_name: "IEDC MEC - Technopreneur 2023",
    icon: storytellingIcon,
    iconBg: "#11094eff",
    date: "2023",
    points: [
      "Attended 'Pitching the Art of Storytelling', a workshop conducted as part of Technopreneur 2023."
    ],
  },
  {
    title: "Python Bootcamp Participant",
    company_name: "IEDC MEC, DSC MEC, Training Cell, Cognicor AICTE IDEALAB, TinkerHub MEC",
    icon: icons8_python,
    iconBg: "#383E56",
    date: "2023",
    points: [
      "Participated in Python Bootcamp, a 5-day bootcamp for Python."
    ],
  },
  {
    title: "Illuminate Workshop Attendee",
    company_name: "BDC MEC in collaboration with E-cell IIT Bombay",
    icon: illuminateIcon,
    iconBg: "#E6DEDD",
    date: "2023",
    points: [
      "Attended Illuminate, a workshop on basics of building a business."
    ],
  },
  {
    title: "Git Workshop Participant",
    company_name: "DSC MEC",
    icon: git,
    iconBg: "#383E56",
    date: "2023",
    points: [
      "Developed strong skills in Git through a workshop conducted by DSC MEC."
    ],
  },
  {
    title: "NLP Training Organizer",
    company_name: "NSDC MEC",
    icon: nlpIcon,
    iconBg: "#07384bff",
    date: "2023",
    points: [
      "Organised Short Term Training on Natural Language Processing, a workshop conducted by NSDC MEC."
    ],
  },
  {
    title: "Web 3.0 Workshop Attendee",
    company_name: "Excel 2022, MEC",
    icon: web3Icon,
    iconBg: "#1d2850ff",
    date: "2022",
    points: [
      "Attended Web 3.0 workshop on Blockchain, Decentralisation and Computing."
    ],
  },
  {
    title: "Core Member",
    company_name: "IEDC MEC",
    icon: iedcIcon,
    iconBg: "#060100ff",
    date: "2024",
    points: [
      "Core Member of IEDC MEC 2024, the entrepreneurship development club."
    ],
  },
  {
    title: "Member",
    company_name: "FOSS MEC",
    icon: fossmecIcon,
    iconBg: "#0c1435ff",
    date: "2024",
    points: [
      "Member of FOSS MEC 2024, the Free and Open-Source club."
    ],
  },
  {
    title: "Quarter-Finalist in Spot On",
    company_name: "Excel 2022, MEC",
    icon: debateIcon,
    iconBg: "#340d08ff",
    date: "2022",
    points: [
      "Quarter-Finalist in Spot On, a debate competition organised by Excel 2022."
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "Placement Cell Coordinator at Govt. Model Engineering College, managing student placement activities and industry collaborations.",
    name: "Placement Cell Coordinator",
    designation: "Govt. Model Engineering College",
    company: "2024–2025",
    image: college,
  },
  {
    testimonial:
      "Conference and Workshop Manager for Excel 2025 – National Level Techno-Managerial Fest of MEC, overseeing event logistics and planning.",
    name: "Conference & Workshop Manager",
    designation: "Excel 2025",
    company: "2025",
    image: excel,
  },
  {
    testimonial:
      "Marketing Lead for GDC MEC – Game Development Club, leading outreach and promotional strategies.",
    name: "Marketing Lead",
    designation: "GDC MEC",
    company: "2023",
    image: gdc,
  },
  {
    testimonial:
      "Outreach Lead for NSDC MEC – Data Science Club, establishing partnerships and expanding community engagement.",
    name: "Outreach Lead",
    designation: "NSDC MEC",
    company: "2023",
    image: nsdc,
  },
];

const projects = [
  {
    name: "HawkFort",
    description:
      "AI-powered intrusion detection system using real-time surveillance, YOLOv8-based threat analysis, and heatmap situational awareness for guided evacuation. Ongoing development.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "yolov8", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
      { name: "supabase", color: "orange-text-gradient" },
    ],
    image: hawkfort,
    source_code_link: "", // pending
  },
  {
    name: "FixItNow",
    description:
      "Public issue reporting platform enabling citizens to report local infrastructure problems with real-time tracking, automated assignment, and resolution updates.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
      { name: "supabase", color: "orange-text-gradient" },
      { name: "clo", color: "green-text-gradient" },
    ],
    image: fixitnow,
    source_code_link: "https://github.com/JesaDileepPhilip/FixItNow",
  },
  {
    name: "Wyzo",
    description:
      "Personal finance management app for budget planning, future expense calculation, wishlist management, and task prioritization.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "supabase", color: "orange-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
      { name: "javascript", color: "yellow-text-gradient" },
    ],
    image: wyzo,
    source_code_link: "https://github.com/JesaDileepPhilip/ExpenseTracker",
  },
  {
    name: "VoteEase",
    description:
      "Online voting management system enabling secure remote voting with advanced authentication and encryption for fair, transparent elections.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
      { name: "php", color: "green-text-gradient" },
      { name: "mysql", color: "orange-text-gradient" },
    ],
    image: voteease,
    source_code_link: "", // pending
  },
  {
    name: "Placement Tracker",
    description:
      "Simple HTML and CSS-based interface for tracking placement-related pages and updates.",
    tags: [
      { name: "html", color: "orange-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: placementtracker,
    source_code_link: "https://github.com/JesaDileepPhilip/PlacementTracker",
  },
];

export { services, technologies, experiences, testimonials, projects };
