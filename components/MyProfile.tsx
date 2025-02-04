// conver to client component
"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import bgImage from "../public/me.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Tech from "./Tech";

gsap.registerPlugin(ScrollTrigger);

const MyProfile = () => {
  useEffect(() => {
    gsap.fromTo(
      ".profile-move-one", // Target element
      { 
        x: -80, // Start 30px to the left 
        opacity: 0, // Optional: start invisible
      },
      { 
        x: 0, // Animate to the original position
        opacity: 1, // Fully visible
        scrollTrigger: {
          trigger: ".myProfile",
          start: "top 10px",
          end: "bottom center",
          
          scrub: 1,
        },
        
        duration: 5, // Control animation time
        ease: "power1.out", // Smooth easing
      }
    );
    gsap.fromTo(
      ".profile-move-two", // Target element
      { 
        x: 80, // Start 30px to the left 
        opacity: 0, // Optional: start invisible
      },
      { 
        x: 0, // Animate to the original position
        opacity: 1, // Fully visible
        scrollTrigger: {
          trigger: ".myProfile",
          start: "top 10px",
          end: "bottom center",
         
          scrub: 1,
        },
        
        duration: 5, // Control animation time
        ease: "power1.out", // Smooth easing
      }
    );
    
  }, []);

  return (
    <div>
      <div className="text-center flex justify-center relative items-center myProfile">
        <Image
          src={bgImage}
          alt="background"
          className="md:ml-20 relative mt-[0px]"
          width={800}
        ></Image>
        <div className="md:block hidden">
          <div className=''>
            <Tech tech="Next" className="absolute profile-move-one  left-[32%] top-[20%]"></Tech>
            <Tech tech="React" className="absolute profile-move-one left-[24%] top-[35%]"></Tech>
            <Tech
              tech="Laravel"
              className="absolute profile-move-one left-[16%] top-[50%]"
            ></Tech>
            <Tech
              tech="Bootstrap"
              className="absolute profile-move-one left-[24%] top-[65%]"
            ></Tech>
            <Tech
              tech="Tailwind"
              className="absolute profile-move-one left-[32%] top-[80%]"
            ></Tech>
          </div>

          <div>
            <Tech
              tech="Java"
              className="absolute  profile-move-two  right-[32%] top-[20%]"
            ></Tech>
            <Tech
              tech="Figma"
              className="absolute  profile-move-two  right-[24%] top-[35%]"
            ></Tech>
            <Tech
              tech="php"
              className="absolute  profile-move-two  right-[16%] top-[50%]"
            ></Tech>
            <Tech
              tech="Angular"
              className="absolute  profile-move-two  right-[19%] top-[65%]"
            ></Tech>
            <Tech
              tech="Vue"
              className="absolute  profile-move-two  right-[27%] top-[80%]"
            ></Tech>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
