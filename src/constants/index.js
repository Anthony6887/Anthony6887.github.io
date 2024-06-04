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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Angular Developer",
    icon: creator,
  },
  {
    title: "Java Developer",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: backend,
  }
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
    title: "React Developer",
    company_name: "Portafolio",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March - August 2024",
    points: [
      "Developed and maintained a personal portfolio website using React.js, showcasing various projects and skills.",
      "Designed a visually appealing and user-friendly interface that highlights professional experience, technical skills, and personal projects.",
      "Integrated responsive design principles to ensure the website is accessible and functional across different devices and screen sizes.",
      "Implemented a dynamic project gallery, allowing users to filter and view detailed information about each project, including screenshots and descriptions.",
      "Deployed the portfolio using modern deployment tools and services, ensuring high availability and scalability.",
    ],
  },
  {
    title: "Angular Developer",
    company_name: "Sistech",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "October 2023 - February 2024",
    points: [
      "Development and maintenance of a certificate generation platform using Angular and other related technologies.",
      "Integration of advanced functionalities for the dynamic creation and customization of certificates, including the automatic generation of QR codes and digital signatures.",
      "Collaboration with multidisciplinary teams, including designers, product managers and other developers, to ensure the quality and effectiveness of the final product.",
      "Implementing responsive design and ensuring cross-browser compatibility to ensure a consistent user experience across different devices and platforms.",
      "Actively participating in code review and offering constructive feedback to improve code quality and development efficiency.",
    ],
  },
  {
    title: "React Developer",
    company_name: "GOurmetGo",
    icon: shopify,
    iconBg: "#383E56",
    date: "March - August 2024",
    points: [
      "Developing and maintaining a comprehensive web application for restaurant management using React.js and other related technologies.",
      "Collaborating with cross-functional teams, including designers, product managers, and other developers, to ensure the delivery of high-quality products that meet client requirements.",
      "Implementing responsive design and ensuring cross-browser compatibility to ensure an optimal user experience across a variety of devices and platforms.",
      "Integrating industry-specific functionalities for restaurants, such as menu management, online ordering, table reservations, inventory management, and sales reporting.",
      "Developing an intuitive and user-friendly administration panel for restaurant owners to efficiently manage their business, access key metrics, and make informed decisions.",
      "Participating actively in code reviews to ensure code quality, style consistency, and adoption of best development practices.",
    ],
  },  
  {
    title: "Backend Developer",
    company_name: "Sistema de Gestion de Prestamos",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "March - August 2024",
    points: [
      "Developing and maintaining web applications using Angular and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
