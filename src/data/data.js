// data.js

import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaCloud,
  FaShieldAlt,
  FaUserShield,
  FaStar,
  FaHandsHelping,
  FaCheckCircle,
} from "react-icons/fa";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaPhoneAlt,
  FaProjectDiagram,
} from "react-icons/fa";
import { FaMapMarkerAlt, FaEnvelope, FaBlog } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineFileText,
} from "react-icons/ai";
import { BsFillGearFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
export const headerItems = [
  { title: "Home", link: "/", icon: <FaHome className="w-5 h-5" /> },
  {
    title: "About",
    link: "/about",
    icon: <FaInfoCircle className="w-5 h-5" />,
  },
  {
    title: "Services",
    link: "/services",
    icon: <FaServicestack className="w-5 h-5" />,
  },

  {
    title: "Projects",
    link: "/projects",
    icon: <FaProjectDiagram className="w-5 h-5" />,
  }, // Added Projects
  { title: "Blog", link: "/blog", icon: <FaBlog className="w-5 h-5" /> },
  {
    title: "Contact",
    link: "/contact",
    icon: <FaPhoneAlt className="w-5 h-5" />,
  },
];

// Services
export const services = {
  "web-development": {
    title: "Web Development",
    description:
      "We build responsive and fast websites to meet modern business needs with the latest web technologies. Our team specializes in creating custom web solutions that help businesses stand out and drive engagement.",
    icon: <FaCode className="text-5xl text-yellow-400" />,
    imageUrl: "/images/blog/web-development.jpg",
    tags: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    link: "/services/web-development",
  },
  design: {
    title: "Design",
    description:
      "Creating visually stunning designs to elevate your brand identity and capture your audience’s attention. Our design team focuses on user experience and the latest design trends to create impactful visuals.",
    icon: <FaPaintBrush className="text-5xl text-yellow-400" />,
    imageUrl: "/images/blog/mobile-app-design.jpeg",
    tags: ["UI/UX", "Graphic Design", "Branding"],
    link: "/services/design",
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    description:
      "We create user-friendly mobile applications for iOS and Android to bring your business to users on the go. Our mobile solutions are tailored to meet your needs and provide a seamless experience.",
    icon: <FaMobileAlt className="text-5xl text-yellow-400" />,
    imageUrl: "/images/blog/mobile-app-development.jpg",
    tags: ["iOS", "Android", "React Native", "Flutter"],
    link: "/services/mobile-app-development",
  },
  "cloud-solutions": {
    title: "Cloud Solutions",
    description:
      "Providing scalable and secure cloud solutions for your business processes. Our experts will help you migrate to the cloud and optimize your resources for better performance.",
    icon: <FaCloud className="text-5xl text-yellow-400" />,
    imageUrl: "/images/cloud-solutions.jpg",
    tags: ["AWS", "Azure", "Cloud Migration"],
    link: "/services/cloud-solutions",
  },
  cybersecurity: {
    title: "Cybersecurity",
    description:
      "Protecting your business with industry-leading cybersecurity solutions. We provide comprehensive security assessments and tailored solutions to safeguard your digital assets.",
    icon: <FaShieldAlt className="text-5xl text-yellow-400" />,
    imageUrl: "/images/cybersecurity.jpg",
    tags: ["Network Security", "Data Protection", "Compliance"],
    link: "/services/cybersecurity",
  },
};

// Latest Blog Posts
// data/data.js
export const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development",
    description:
      "Explore the latest trends and technologies shaping the future of web development.",
    content:
      "Web development is constantly evolving. In this article, we explore...",
    image: "/images/blog/web-development.jpg",
    tags: ["Web Development", "Future", "Technology"],
  },
  {
    id: 2,
    title: "Top Mobile App Design Principles",
    description:
      "Learn the key principles to design a user-friendly and visually appealing mobile app.",
    content:
      "Designing a mobile app involves several key principles such as...",
    image: "/images/blog/mobile-app-design.jpeg",
    tags: ["Mobile App", "Design", "User Experience"],
  },
  {
    id: 3,
    title: "Cloud Computing for Businesses",
    description:
      "Discover how cloud computing can optimize and scale your business operations.",
    content:
      "Cloud computing has revolutionized how businesses operate. Here are...",
    image: "/images/blog/cloud-computing.png",
    tags: ["Cloud Computing", "Business", "Technology"],
  },
  {
    id: 4,
    title: "Cybersecurity Best Practices",
    description:
      "Protect your business with these essential cybersecurity tips and strategies.",
    content:
      "In today's digital age, cybersecurity is paramount. Here are some...",
    image: "/images/blog/cybersecurity.png",
    tags: ["Cybersecurity", "Protection", "Safety"],
  },
];

// Why Choose Us
export const reasons = [
  {
    id: 1,
    title: "Expert Team",
    description:
      "Our team consists of experienced professionals with diverse skill sets to handle all your needs.",
    icon: <FaUserShield className="text-4xl text-main-yellow" />,
  },
  {
    id: 2,
    title: "Customer Satisfaction",
    description:
      "We prioritize our clients, ensuring that your needs and expectations are met with excellence.",
    icon: <FaStar className="text-4xl text-main-yellow" />,
  },
  {
    id: 3,
    title: "Tailored Solutions",
    description:
      "We provide customized solutions that are tailored to meet the unique requirements of your business.",
    icon: <FaHandsHelping className="text-4xl text-main-yellow" />,
  },
  {
    id: 4,
    title: "Proven Track Record",
    description:
      "Our portfolio speaks for itself, showcasing successful projects and satisfied clients.",
    icon: <FaCheckCircle className="text-4xl text-main-yellow" />,
  },
];

// What Our Clients Say
export const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    position: "CEO, Tech Solutions",
    feedback:
      "Working with this team has transformed our business. Their expertise and dedication to our project were unparalleled.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "John Smith",
    position: "Founder, Creative Agency",
    feedback:
      "The attention to detail and commitment to excellence exceeded our expectations. Highly recommend!",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Sarah Lee",
    position: "Director, Marketing Pros",
    feedback:
      "Their ability to understand our needs and deliver tailored solutions made all the difference. We are thrilled with the results!",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
  },
  {
    id: 4,
    name: "Michael Brown",
    position: "Product Manager, Innovate Inc.",
    feedback:
      "A fantastic experience from start to finish. Their support throughout the process was invaluable!",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
];

// Frequently Asked Questions
export const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of services including web development, mobile app development, cloud solutions, and cybersecurity.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "The timeline for each project depends on the scope and complexity, but we always aim to deliver high-quality results within an agreed timeframe.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing is flexible and based on the specific needs of your project. We offer competitive rates and customized solutions for each client.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes, we offer post-launch support to ensure your project runs smoothly. Our support packages are customizable to suit your business needs.",
  },
  {
    question: "How do I get started with a project?",
    answer:
      "Simply reach out to us through our contact form, and we will set up a consultation to discuss your project requirements.",
  },
];

// data/data.js

export const contactInfo = [
  {
    type: "address",
    title: "Address",
    detail: "123 Main Street, Your City",
    icon: <FaMapMarkerAlt className="text-main-yellow text-3xl mr-4" />,
  },
  {
    type: "phone",
    title: "Phone",
    detail: "+1 (234) 567-890",
    icon: <FaPhoneAlt className="text-main-yellow text-3xl mr-4" />,
  },
  {
    type: "email",
    title: "Email",
    detail: "contact@yourdomain.com",
    icon: <FaEnvelope className="text-main-yellow text-3xl mr-4" />,
  },
];
// footerConfig.js
export const footerData = {
  companyInfo: {
    description:
      "Providing cutting-edge digital solutions to enhance your business. We specialize in web and mobile app development, cloud solutions, and cybersecurity.",
    address: "Tebessa, Algeria",
  },
  quickLinks: [
    { title: "Services", href: "/services" },
    { title: "About Us", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Blog", href: "/blog" },
  ],
  contactInfo: {
    email: "info@ourcompany.com",
    phone: "+213 555 123 456",
    address: "Tebessa, Algeria",
  },
  socialLinks: [
    {
      platform: "Facebook",
      url: "https://www.facebook.com",
      icon: FaFacebookF,
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com",
      icon: FaInstagram,
    },
    { platform: "Twitter", url: "https://www.twitter.com", icon: FaTwitter },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com",
      icon: FaLinkedinIn,
    },
  ],
};
export const projectsData = [
  {
    id: 1,
    name: "Creative Branding",
    category: "Design",
    description:
      "A creative branding project showcasing modern design principles.",
    content: `This project involved the creation of a comprehensive branding strategy, 
    including logo design, color palette selection, and visual identity development for a tech company.
    The branding reflects a sleek, modern, and professional aesthetic to match the company's values and market presence.`,
    mainImage:
      "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    images: [
      "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ],
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    category: "Web Development",
    description:
      "A complete e-commerce platform built for a growing online retail business.",
    content: `This project was focused on developing a custom e-commerce platform using Next.js and Strapi. 
    The platform allows users to browse products, add items to their cart, and proceed through a secure checkout process.
    Features include product filtering, dynamic pricing, and multi-language support for an international customer base.`,
    mainImage:
      "https://images.pexels.com/photos/6476582/pexels-photo-6476582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    images: [
      "https://images.pexels.com/photos/6476586/pexels-photo-6476586.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ],
  },

  {
    id: 4,
    name: "Photography Portfolio",
    category: "Photography",
    description:
      "A personal photography portfolio showcasing landscape and portrait works.",
    content: `This portfolio website was designed for a professional photographer to display their best work. 
    The site features high-resolution photo galleries, a blog section, and contact forms for potential clients. 
    The design focuses on clean layouts that let the photographs shine, with fast loading times and responsive design.`,
    mainImage:
      "https://images.pexels.com/photos/2104151/pexels-photo-2104151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    images: [
      "https://images.pexels.com/photos/2104162/pexels-photo-2104162.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/2104176/pexels-photo-2104176.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ],
  },
  {
    id: 5,
    name: "Fitness App",
    category: "App Development",
    description:
      "A fitness and health app designed to help users achieve their fitness goals.",
    content: `This fitness app helps users plan and track their workouts, set fitness goals, and monitor their progress over time. 
    It includes features like exercise tutorials, nutrition plans, and progress reports, all integrated with wearables for accurate health tracking.`,
    mainImage:
      "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    images: [
      "https://images.pexels.com/photos/1954523/pexels-photo-1954523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/1954525/pexels-photo-1954525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ],
  },
];

export const DashboardItems = [
  {
    name: "Home",
    path: "/dashboard",
    icon: <AiOutlineHome className="mr-2" />,
  },
  {
    name: "Services",
    path: "/dashboardServices",
    icon: <BsFillGearFill className="mr-2" />,
  },
  {
    name: "Projects",
    path: "/dashboardProjects",
    icon: <AiOutlineProject className="mr-2" />,
  },
  {
    name: "Blogs",
    path: "/dashboardBlogs",
    icon: <AiOutlineFileText className="mr-2" />,
  },

];
