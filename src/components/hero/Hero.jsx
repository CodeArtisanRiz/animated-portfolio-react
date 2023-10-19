import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
    initial:{
        x: -500,
        opacity: 0,
    },
    animate:{
        x: 0,
        opacity: 1,
        transition:{
            duration: 1,
            staggerChilden: 0.1,
        },
    },
}

const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div className="textContainer" variants={textVariants}>
                <motion.h2 variants={textVariants}>H M Rizwan Mazumder</motion.h2>
                <motion.h1 variants={textVariants}>Web Developer & UI Designer</motion.h1>
                <motion.div variants={textVariants} className="buttons">
                    <motion.button variants={textVariants}>See the Latest Works.</motion.button>
                    <motion.button variants={textVariants}>Contact Me</motion.button>
                </motion.div>
                <motion.img variants={textVariants} src="./scroll.png" alt="" />
            </motion.div>
        </div>
        <div className="slidingTextContainer">
            Android iOS React Java Developer 
        </div>
        <div className="imageContainer">
            <img src="/hero1.png" alt="" />
        </div>
    </div>
  )
}

export default Hero
