import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Logos
import collegelogo from "../assets/institutions/collegelogo.png";
import nsshsslogo from "../assets/institutions/nsshsslogo.jpg";
import clunylogo from "../assets/institutions/clunylogo.png";

const educationDetails = [
  {
    name: "Govt. Model Engineering College",
    description: "KTU, B.Tech in Computer Science Engineering",
    year: "2026",
    score: "CGPA: 8.87",
    color: "text-blue-400",
    icon: collegelogo,
    iconBg: "#ffffffff",
  },
  {
    name: "NSS HSS Anickadu",
    description: "State, 12th",
    year: "2022",
    score: "98.6%",
    color: "text-green-400",
    icon: nsshsslogo,
    iconBg: "#042f4dff",
  },
  {
    name: "Cluny Public School & Junior College",
    description: "CBSE, 10th",
    year: "2020",
    score: "89.6%",
    color: "text-pink-400",
    icon: clunylogo,
    iconBg: "#070005ff",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      type: "spring",
      stiffness: 80,
    },
  }),
};

const EducationCard = ({ education, index }) => (
  <motion.div
    variants={cardVariants}
    custom={index}
    className="bg-[#1d1836] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl hover:scale-[1.03] transition-transform duration-300"
  >
    <div
      className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
      style={{ backgroundColor: education.iconBg }}
    >
      <img
        src={education.icon}
        alt={education.name}
        className="w-12 h-12 object-contain"
      />
    </div>
    <h3 className="text-white text-lg font-bold">{education.name}</h3>
    <p className="text-secondary text-sm mt-1">{education.description}</p>
    <p className={`mt-3 text-base font-semibold ${education.color}`}>
      {education.score}
    </p>
    <span className="mt-2 text-xs text-gray-400">Passout Year:  {education.year}</span>
  </motion.div>
);

const Education = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>My Academic Journey</p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Education</h2>
    </motion.div>

    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {educationDetails.map((education, index) => (
        <EducationCard key={index} education={education} index={index} />
      ))}
    </motion.div>
  </>
);

export default SectionWrapper(Education, "education");
