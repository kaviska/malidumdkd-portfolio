'use client';

import React from "react";
import ProjectCard from "./ProjectCard";  
import Typewriter from 'typewriter-effect';

const project = [
  {
    image:'/groccery.svg',
    name: "POS System",
    workedOn: ["Frontend", "Backend", "Admin"],
    Technology: [
      "Next",
      "React",
      "Tailwind",
     
      "MySql",
      "github"
    ],
    color:'#10B981',
    link: "https://temp-pos.vercel.app",
    details:"A comprehensive web-based Point of Sale system with admin dashboard. Features include inventory management, sales tracking, and user authentication. Login with admin@example.com / password for demo access.",
  },
  {
    image:'/resturant.avif',
    name: "Restaurant POS System",
    workedOn: ["Frontend", "Backend", "Multi-Role System"],
    Technology: [
      "Laravel",
    
      "Tailwind",
      "React",
      "Redux",
      "MUI"
    ],
    color:'#F59E0B',
    link: "https://white-octopus-933718.hostingersite.com",
    details:"Multi-role restaurant POS system with separate access for Admin, Kitchen, Cashier, and Waiter. Features role-based permissions, order management, kitchen display system, and real-time updates.",
  },
  {
    image:'/groccery.svg',
    name: "Japanese E-Commerce",
    workedOn: ["Frontend", "Backend", "Payment Integration"],
    Technology: [
     "Laravel",
      
      "Tailwind",
      "React",
      "Redux",
      "MUI"
    ],
    color:'#DC2626',
    link: "https://iymart.jp/",
    details:"A comprehensive Japanese e-commerce platform built with WooCommerce. Features include multi-language support, Japanese payment gateways, and custom product catalog management.",
  },
  {
    image:'/car.webp',
    name: "Japanese Car Sales",
    workedOn: ["Frontend", "Backend", "Admin Panel"],
    Technology: [
      "Laravel",
      "PHP",
      
      "Bootstrap",
      "CSS",
      "JavaScript"
    ],
    color:'#3B82F6',
    link: "https://nipponcars.jp/",
    details:"Japanese car dealership website with advanced search filters, car listings management, and inquiry system. Features include vehicle comparison, detailed specifications, and contact forms.",
  },
  {
    image:'/instragram.jpg',
    name: "Instagram Downloader Tool",
    workedOn: ["Frontend", "Backend", "API Integration"],
    Technology: [
      "Next",
      "React",
      "MUI",
      
      "Tailwind",
      "github"
    ],
    color:'#E91E63',
    link: "https://savefrominsta.app/",
    details:"A web tool for downloading Instagram content including photos, videos, and stories. Built with Next.js and features a clean, user-friendly interface with fast download capabilities.",
  },
  {
    image:'/Meet&Greet.png',
    name: "Parking Booking System",
    workedOn: ["Frontend", "Backend", "Payment Integration"],
    Technology: [
      "Html",
      "Css",
      "Bootstrap",
      "Php",
      "Stripe",
      
    ],
    color:'#0084ea',
    link: "https://parking.yourmeetandgreetservice.co.uk/",
    details:"Airport parking booking platform with Stripe payment integration. Features include real-time availability, booking management, and automated confirmation emails.",
  },
  {
    image:'/e-commerce-img.avif',
    name: "Next.js E-Commerce",
    workedOn: ["Frontend", "Backend", "State Management"],
    Technology: [
      "Laravel",
      "React",
      "Tailwind",
      "Redux",
      "MUI",
      "github"
    ],
    color:'#8B5CF6',
    link: "https://next-e-commerce-neon.vercel.app/",
    details:"Modern e-commerce website built with Next.js featuring product catalog, shopping cart, user authentication, and responsive design. Includes Redux for state management and Material-UI components.",
  },
  {
    image:'/cheer.jpg',
    name: "Food & Cheer Brand",
    workedOn: ["Frontend Design", "WordPress Development"],
    Technology: [
      "Wordpress",
      "Elementor",
      "Css",
      "Html",
      "Figma",
      "JavaScript"
    ],
    color:'#F97316',
    link: "https://eecheer.com/",
    details:"Brand website for a food and cheerleading company. Features modern design, responsive layout, and custom WordPress theme development with Elementor page builder.",
  }
];

const Project = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-b from-transparent to-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="heading text-4xl md:text-6xl font-bold mb-4">
            <Typewriter
              options={{
                strings: ['MY PROJECTS', 'RECENT WORK', 'PORTFOLIO'],
                autoStart: true,
                loop: true,
                delay: 150,
                deleteSpeed: 50,
                cursor: '|',
              }}
            />
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
            Explore my recent projects showcasing expertise in web development, mobile applications, and SaaS solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8 md:space-y-12">
          {project.map((projectItem, index) => (
            <ProjectCard
              key={index}
              image={projectItem.image}
              name={projectItem.name}
              workedOn={projectItem.workedOn}
              Technology={projectItem.Technology}
              details={projectItem.details}
              link={projectItem.link}
              color={projectItem.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
