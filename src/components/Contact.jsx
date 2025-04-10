import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../style'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

//template_gbqqzum
//service_i85r1vb
//Dhju76pl25Rx2Woy7
const Contact = () => {
  const formRef = useRef()
  const [form, setform] = useState({
    name: '',
    email: '',
    message: ''
  }
  )
  const [loading, setloading] = useState(false)

  const handleChange = (e) => {
    const {name, value} = e.target;

    setform({...form, [name]: value})
   }

  const handleSubmit = (e) => { 
    e.preventDefault();
    setloading(true);

    emailjs.send(
      'service_i85r1vb',
      'template_gbqqzum',
      {
        from_name: form.name,
        to_name: 'Ahsen',
        from_email: form.email,
        to_email: 'ahsenmehmood545@gmail.com',
        message: form.message,
      },
      'Dhju76pl25Rx2Woy7',
    )
    .then(() => {
      setloading(false);
      alert('Thank you. I will get back to you as soon as possible.');

      setform({
        name: '',
        email: '',
        message: ''
      })
    }, (error) => {
      setloading(false);
      console.log(error);
      alert('Something went wrong.');
    })
  }
  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={`${styles.sectionSubText}`}>Get in Touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>

            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'

            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>

            <input
              type='text'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'

            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>

            <textarea
              rows="7"
              type='text'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'

            />
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

const ContactSection = SectionWrapper(Contact, "contact")

export default ContactSection;