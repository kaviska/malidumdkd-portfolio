'use client';

import React from "react";
import {
  Timeline,
 
} from "@mui/lab/";
import Technology from "./Technology";
import Typewriter from "typewriter-effect";
import TimelineItems from "./TimelineItems"; // Ensure this path is correct or update it to the correct path

const Experience = () => {
  return (
    <>
    <div className="background-image-experience md:block hidden">
      <h1 className="text-center heading mt-[70px] mb-12">
      <Typewriter
            options={{
              strings: ['Experience'],
              autoStart: true,
              loop: true,
              delay: 200, // Typing speed in milliseconds
              cursor: '|', // Customize the cursor style
            }}
          />
      </h1>

      <Timeline position="alternate" className="">
      
        <TimelineItems
        dotImage="/job.svg"
        role="Full Stack Developer"
        company="Algowrite Software Solution"
        logo="./calender.svg"
        date="2024 - Present"
        descripition={[
          "Developed dynamic and responsive user interfaces using React.js",
          "Built reusable components and modular front-end libraries for scalability",
          "Explored and implemented new technologies to enhance development efficiency",
          "Optimized front-end and back-end performance for seamless user experience "
        ]}
        
       /> 
        <TimelineItems
        dotImage="/job.svg"
        role="Project Manager"
        company="Algowrite Software Solution"
        logo="./calender.svg"
        date="2024 - Present"
        descripition={[
          "Led cross-functional teams to successfully deliver projects on time",
          "Defined project goals, roadmaps, and deliverables to align with business ",
          "Implemented process improvements to enhance team efficiency  ",
          "Ensured optimal resource allocation and risk management for successful "
        ]}
        
       /> 

<TimelineItems
        dotImage="./job.svg"
        role="Fiver Freelancer"
        company="Fiver"
        logo="./calender.svg"
        date="2024 - Present"
        descripition={[
          "Delivered high-quality web development services to clients worldwide",
          "Designed and built responsive user interfaces using modern frameworks",
          "Developed reusable components and optimized performance",
          "Collaborated with clients to understand project requirements ",
          
        ]}
       /> 
         <TimelineItems
        dotImage="./job.svg"
        role="Frontend Developer"
        company="Upwork"
        logo="./calender.svg"
        date="2024 - Present"
        descripition={[
          "Provided full-stack web development services to clients on Upwork",
  "Designed and developed scalable, responsive web applications",
  "Built reusable components and optimized performance for user experience",
  "Collaborated with international clients to understand project requirements ",
 
        ]}
       /> 


      </Timeline>
    
    </div>
      <div className="md:flex hidden justify-center gap-4 mx-10 mt-30 flex-wrap">
      <Technology icon="React" />
      <Technology icon="Flutter" />
      <Technology icon="Figma" />
      <Technology icon="Elementor" />
      <Technology icon="Laravel" />

      <Technology icon="Java" />
      <Technology icon="JavaScript" />
      <Technology icon="Next" />
      <Technology icon="Php" />
      <Technology icon="Redux" />

      <Technology icon="Css" />
      <Technology icon="Wordpress" />
      <Technology icon="VS" />
      <Technology icon="Angular" />
      <Technology icon="Bootstrap" />
    </div>
    </>
  );
};

export default Experience;