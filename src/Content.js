// import images
import person from "./assets/images/Hero/hero.png";


import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import html from "./assets/images/Skills/html.png";
import css from "./assets/images/Skills/css.png";
import jslogo from "./assets/images/Skills/jslogo.png";
import tailwind from "./assets/images/Skills/tailwind.png";
import express from "./assets/images/Skills/express.png";
import mongo from "./assets/images/Skills/mongo.png";





import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import mongodata from "./assets/images/Services/mongodata.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import project4 from "./assets/images/projects/img4.png";
import person_project from "./assets/images/projects/person.png";


import clg from "./assets/images/Testimonials/clg.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";


export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Full Stack Web Developer",
    firstName: "RAHUL",
    LastName: "SINGH",
    btnText: "Hire Me",
    image: person,
    hero_content: [
      {
        count: "",
        text: "Crafting Dynamic Digital Experiences with Code & Creativity!!",
      },
      {
        count: "5+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "HTML",
        para: "Experienced",
        logo: html,
      },
      {
        name: "CSS",
        para: "Experienced",
        logo: css,
      },
      {
        name: "Java Script",
        para: "Experienced",
        logo: jslogo,
      },
      {
        name: "Tailwind CSS",
        para: "Experienced",
        logo: tailwind,
      },
      {
        name: "React JS",
        para: "Intermediate",
        logo: reactjs,
      },
      {
        name: "Node JS",
        para: "Intermediate",
        logo: nodejs,
      },
      {
        name: "Express JS",
        para: "Intermediate",
        logo: express,
      },
      {
        name: "Mongo DB",
        para: "Intermediate",
        logo: mongo,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Frontend Development",
        para: "I specialize in creating responsive, fast, and user-friendly websites using modern technologies like HTML, CSS, JavaScript, React.js, and Next.js.Whether it's building a single-page application or a complex web platform, I focus on delivering clean and maintainable code.",
        logo: services_logo1,
      },
      {
        title: "Backend Development",
        para: "I provide robust backend development services, ensuring your web applications are secure, scalable, and efficient.My expertise includes working with Node.js, Express.js and MongoDB to build RESTful APIs, manage databases, and create server-side logic",
        logo: mongodata,
      },
      {
        title: "UI / UX DESIGNING",
        para:  "I design intuitive and visually appealing interfaces that enhance user experience and engagement.My UI/UX process involves user research, wireframing, prototyping, and designing user flows for both mobile and web platforms",
        logo: services_logo2,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "ReaL Estate Pro",
        image: project1,
        link: "http://real-estate-pro-m4wj.onrender.com/",
      },
      {
        title: "School Website",
        image: project2,
        link: "https://little-s-website.vercel.app/",
      },
      {
        title: "Converso AI",
        image: project3,
        link: "https://converso-ai.vercel.app/",
      },
      {
        title: "E-Signature Board",
        image: project4,
        link: "https://esignature-board.vercel.app/",
      },
    ],
  },
  Testimonials: {
    title: "Education",
    subtitle: "MY EDUCATION JOURNEY",
    testimonials_content: [
      {
        review:
          "Bachelor of Technology in Computer Science and Engineering (Invertis University, Bareilly)",
        img: clg,
        name: "2022-2025",
      },
      {
        review:
          "Diploma in Chemical Engineering (UBTER)",
        img: clg,
        name: "2018-2021",
      },
      {
        review:
          "High School",
        img: clg,
        name: "D.A.V. PUBLIC SCHOOL KASHIPUR",
      },
      
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Crafting modern and responsive websites, I specialize in turning ideas into interactive web experiences. From frontend to backend, I ensure seamless functionality and design to elevate your online presence.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "singhrahulksp@gmail.com",
        icon: GrMail,
        link: "mailto:singhrahulksp@gmail.com",
      },
      {
        text: "+919997699629",
        icon: MdCall,
        link: "https://wa.me/9997699629",
      },
      {
        text: "Rahul Singh",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/rahul-singh-87675a221/",
      },
      {
        text: "Rahul Singh",
        icon: FaGithub,
        link: "https://github.com/Rahulthhkur",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2024",
  },
};
