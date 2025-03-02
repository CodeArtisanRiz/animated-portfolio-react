import { motion } from 'framer-motion';
import { styles } from '../../styles';
// import { ComputersCanvas } from '../canvas';
import { SectionWrapper } from '../../hoc';
 
 

const Hero3D = () => {
  return (
    <div className = "relative w-full h-screen mx-auto">    
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>
        <div className = "flex flex-col justify-center items-center mt-5">
          <div className='w-5 h-5 rounded-full bg-[#55aec0]'/>
          <div className="w-1 m:h-80 h-40 violet-gradient"/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi I'm <span className='text-[#55aec0] '>Rizwan</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I develop user interfaces, android, ios<br className='sm:block hidden'/> and web applications.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero3D