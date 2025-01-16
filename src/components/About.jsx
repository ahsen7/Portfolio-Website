import React from 'react'
import {motion} from 'framer-motion'

import {styles} from '../style'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import ServiceCard from './ServiceCard'
import {SectionWrapper} from '../hoc'

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    <motion.p 
    variants={fadeIn("","",0.1,1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
    Turning ideas into flawless apps that wow users and puzzle competitors.
     I make fast, smooth React and React Native experiences, transforming tough challenges into smart solutions. 
     Clean code is my rule, and creating digital experiences people love is my goal. Ready to build something amazing?
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
    </>
  )
}
const AboutSection = SectionWrapper(About, "about")
export default AboutSection