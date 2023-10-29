import "./hero.scss";
import { styles } from '../../styles';
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">


      <div className = "relative w-full h-screen mx-auto">    
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>
          <div className = "flex flex-col justify-center items-center mt-5">
            <div className='w-5 h-5 rounded-full bg-[#55aec0]'/>
            <div className="w-1 m:h-80 h-40 violet-gradient"/>
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi I'm <span className='text-[#55aec0] '>Rizwan</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            UI/UX Designer, <br />Android, iOS<br className='sm:block hidden'/> and Web Developer.
            </p>
          </div>
        </div>
    </div>
        {/* <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate">
          <motion.h2 variants={textVariants}>H M RIZWAN MAZUMDER
          </motion.h2>
          <motion.h1 variants={textVariants}>
          Mobile & Web Developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div> */}
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        iOS Android React Java Php
      </motion.div>
      <div className="imageContainer">
        <img src="/riz.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
