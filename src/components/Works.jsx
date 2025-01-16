import { motion } from 'framer-motion'
import { styles } from '../style'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import ProjectCard from './ProjectCard'

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>

      </motion.div>

      <div className='w-full flex'>
        <motion.p variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'

        >
          Welcome to where ideas come to life. These projects showcase not just code,
          but my obsession with crafting experiences that users love to use. Each application represents a unique challenge conquered,
          from lightning-fast web apps to smooth mobile experiences. Take a look to see how I turn complex problems into elegant, user-focused solutions
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
      <div className='flex justify-center items-center mt-4'>
        <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            onClick={() => window.open('https://github.com/ahsen7', "_blank")}
          >
            More Projects
          </button>
      </div>
    </>
  )
}

const WorkSection = SectionWrapper(Works, "work")

export default WorkSection