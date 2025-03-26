import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    starbucks,
    threejs,
    facebook,
    neuron,
    travel,
    shopify,
    crypto,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "React Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "UI Developer",
      icon: backend,
    },
    {
      title: "Figma Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React Native Developer",
      company_name: "KeepCoders",
      icon: starbucks,
      iconBg: "#383E56",
      date: "September 2024 - December 2024",
      points: [
        "Developing and maintaining web applications using React Native and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Figma Designer",
      company_name: "Freelance",
      icon: facebook,
      iconBg: "#E6DEDD",
      date: "Nov 2023 - Nov 2023",
      points: [
        "Designed a sleek, responsive layout ensuring a seamless experience across all devices.",
        "Created unique branding elements and graphics aligned with Viral Vamp's vision and target audience.",
        "Designed an eye-catching homepage that highlights Viral Vamp’s key offerings and services.",
        "Delivered a polished, user-centric design that effectively represents the client’s brand online.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shafiq Construction Company",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "You're good at what you do Ahsen, your designs are amazing and you have the right attitude to work. Keep going on and never stop, you belong to the top!.",
      name: "Adewumi Adesokan",
      designation: "CEO",
      company: "Viral Vamp",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "He demonstrated a commendable level of professionalism, dedication, and a keen interest in learning. He effectively contributed to various projects and tasks, showcasing skills that were valuable to our team. ",
      name: "Samrah Qasim",
      designation: "HR Manager",
      company: "KeepCoders",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "He has proved to be a reliable team player and a quick learner, qualities that will serve him well in him professional journey.",
      name: "Rauf Ahmed",
      designation: "CEO",
      company: "Shafiq Construction Company",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Neuron",
      description:
        "Neuron is an advanced AI-powered chat app designed to redefine communication, enabling smarter, seamless, and engaging interactions with cutting-edge technology..",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "framer-motion",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: neuron,
      source_code_link: "https://github.com/ahsen7/Neuron",
      website_link: "https://neuron-rtnu.vercel.app/"
    },
    {
      name: "GoWander",
      description:
        "GoWander is a React Native travel app designed to inspire and guide explorers on their next adventure. With personalized trip recommendations, curated itineraries.",
      tags: [
        {
          name: "react-native",
          color: "pink-text-gradient",
        },
        {
          name: "reanimated",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "blue-text-gradient",
        },
       
      ],
      image: travel,
      source_code_link: "https://github.com/ahsen7/Travel-UI-with-Reanimated-React-Native",
    },
    {
      name: "Crypto Vault",
      description:
        "CryptoVault is a secure React Native app for managing cryptocurrency portfolios. Track markets, analyze trends, and manage assets effortlessly—all in one place. ",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "reanimated",
          color: "pink-text-gradient",
        },
      ],
      image: crypto,
      source_code_link: "https://github.com/ahsen7/CryptoVault--React-Native-AppUI-with-Reanimated",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };