import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'
import FeedbackCard from './FeedbackCard'


const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} min-h-[300px] bg-tertiary rounded-2xl`}>
      <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText}`}>What others say</p>
      <h2 className={`${styles.sectionHeadText}`}>Testimonials</h2>
      </motion.div>
      </div>
      <div className={`${styles.paddingX} flex flex-wrap gap-5 mt-20 pb-14`}>
      {testimonials.map((testimonial, index) => (
        <FeedbackCard key={testimonial.name} 
        index={index} 
        {...testimonial} />
      ))}
      </div>
      </div>

  )
}

const userFeedback = SectionWrapper(Feedbacks, "feedbacks")

export default userFeedback