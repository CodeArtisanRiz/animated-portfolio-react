import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { services } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import SectionWrapper from "../../hoc/SectionWrapper";
import "./about.scss";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="w-[250px] ">
      <motion.div
        variants={fadeIn("right", "spring", index*0.5 , 0.75)}
        className="w-full p-[1.2px] rounded-[20px] shadow-card scard"
        
        >
          <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title}
            className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold
            text-center " >
              {title}
            </h3>

          </div>
        </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <> 
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}></p><br />
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={"mt-4 text-secondary text-[17px] max-w-7xl leading-[30px] text-justify"}
      >
        {/* I'm a proficient software developer with experience in Java, Kotlin,
        Python, Php, and JavaScript, and expertise in frameworks like React,
        React Native, and Three.js. With a keen eye for detail and a passion
        for creating solutions that address real-world problems, I am committed
        to delivering efficient, scalable, and user-friendly applications that
        exceed clients' expectations. */}
        I am a proficient software developer with a master's degree in Computer Science,
        expertise in a wide array of programming languages, including Java,
        Kotlin, Python, PHP, and JavaScript. My skill set extends to various frameworks
        such as Android Studio, Flutter, React, React Native, and Laravel.
        With a sharp eye for detail and an unwavering commitment to crafting solutions that
        tackle real-world problems, I am dedicated to delivering applications that are not
        only efficient and scalable but also user-friendly, consistently exceeding the expectations of my clients.
      
      </motion.p>

      {/* <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>I do:</p><br />
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div> */}

      <div className="mt-20 flex flex-wrap gap-10 justify-evenly">
        {services.map((services, index) => (
          <ServiceCard key={services.title} index={index} {...services} />
        ))}
        
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
 