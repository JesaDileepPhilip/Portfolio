import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaInstagram,
  FaUser,
} from "react-icons/fa";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const contactDetails = [
    {
      icon: <FaUser />,
      label: "Name",
      value: "Jesa Dileep Philip",
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "jesadileepphilip2004.mec@gmail.com",
      link: "mailto:jesadileepphilip2004.mec@gmail.com",
    },
    {
      icon: <FaPhoneAlt />,
      label: "Phone",
      value: "+91 8848608209",
      link: "tel:+918848608209",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "linkedin.com/in/jesa-dileep-philip",
      link: "https://www.linkedin.com/in/jesa-dileep-philip-5b62a6255",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      value: "instagram.com/jesa_dileep_philip",
      link: "https://www.instagram.com/jesa_dileep_philip?utm_source=qr&igsh=MTBpNXdhZ2I4dXAwNw==",
    },
  ];

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      {/* Left side - Contact Info */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] p-8 rounded-2xl shadow-2xl border border-gray-700 backdrop-blur-lg bg-white/10"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} mb-8`}>Contact</h3>

        <div className="flex flex-col gap-6 text-white">
          {contactDetails.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 p-3 rounded-lg transition-all bg-white/5 hover:bg-white/20 cursor-pointer"
              onClick={() => item.link && window.open(item.link, "_blank")}
            >
              <div className="text-primary text-2xl">{item.icon}</div>
              <div>
                <p className="text-sm text-gray-300">{item.label}</p>
                <p className="font-semibold">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right side - 3D Earth */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
