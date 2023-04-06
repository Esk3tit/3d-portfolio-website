import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from "../styles";

const TechCard = ({ index, name, icon }) => {
  return (
    <Tilt className='xs:w-[225px] w-full'>
      <motion.div variants={fadeIn("up", "spring", 0.25 * index, 0.5)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{ max: 45, scale: 1, speed: 450 }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={name} className='w-28 h-28 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{name}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>The Technologies I Know</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <TechCard key={technology.name} index={index} {...technology} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "");