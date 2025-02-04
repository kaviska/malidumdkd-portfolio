'use client';

import React from "react";
import ProjectCard from "./ProjectCard";  
import Typewriter from 'typewriter-effect';

//import Contact from './Earth'

const project = [
  {
    image:'/Meet&Greet.png',
    name: "Greet & Meeting",
    workedOn: ["Frontend", "Backend", "Admin"],
    Technology: [
      "Html",
      "Css",
      "Bootstrap",
      "Php",
      "Stripe",
      "MySql"
    
    ],
    color:'#0084ea',
    link: "https://parking.yourmeetandgreetservice.co.uk/",
    details:"Greet & Meeting is a platform that allows users to book parking spaces at airports. The platform is built using Html,PHP, and Stripe. The platform also has an admin panel that allows the admin to manage bookings and parking spaces.",
  },
  {
    image:'/dadTravel.png',
    name: "Managment Pannel",
    workedOn: ["Frontend", "Backend", "Admin"],
    Technology: [
      "Laravel",
      "Metronic",
      "Bootstrap",
      'Css',
     
      "Vue",
      "MySql",
    ],
    color:'#0084ea',

    link: "",
    details:"Greet & Meeting is a platform that allows users to book parking spaces at airports. The platform is built using React, Node.js, and Stripe. The platform also has an admin panel that allows the admin to manage bookings and parking spaces.",
  },
  {
    image:'/cheer.jpg',
    name: "Cheerleaders Pannel",
    workedOn: ["Frontend Home Page"],
    Technology: [
      "Wordpress",
      "Elementor",
      "Css",
      "Html",
      "CPannel",
      "Figma",
      
    ],
    color:'#0084ea',
    details:"Cheerleaders Pannel is a platform designed for managing cheerleading teams and events. The platform is built using React and Node.js. Note: I only developed the home page for this project",


    link: "https://eecheer.com/",
  },
  {
    image:'/Mobile-App.jpg',
    name: "App Promotion Website",
    workedOn: ["Frontend", "Backend", "Admin"],
    Technology: [
      "Html",
      "Css",
      "JavaScript",
      "Figma",
      "CPanel",
      "Bootstrap",
     
    ],
    color:'#0084ea',
    details:"A application to promote mobile applications. Built for patrice purpose to html,css,js refering the youtube video ",
    link: "http://appprofile.infinityfreeapp.com/?i=1",
  },
  {
    image:'/e-commerce-img.avif',
    name: "E Commerce Platform",
    workedOn: ["Frontend", "Backend", "Admin"],
    Technology: [
      "Wordpress",
      "Woocommerce",
      "Php",
      "Elementor",
      "Css",
      "Figma",
      
    ],
    color:'#0084ea',
    details:"This is application make with algowrite software solution . One of team member of this project",
    link: "https://www.bobby.lk/",
  }

];

const Project = () => {
  return (
    <div id="projects">
      <h1 className="heading my-12">
      <Typewriter
            options={{
              strings: ['PROJECTS'],
              autoStart: true,
              loop: true,
              delay: 200, // Typing speed in millisecondsu
              cursor: '|', // Customize the cursor style
            }}
          />
      </h1>
      <div>
        {project.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            name={project.name}
            workedOn={project.workedOn}
            Technology={project.Technology}
            details={project.details}
            link={project.link}
            color={project.color}
          />
        ))}
      </div>
   
    </div>
  );
};

export default Project;
