"use client";
import React, { useState, useEffect } from "react";
import Tech from "./Tech";
import Typewriter from "typewriter-effect";
import gsap from "gsap"; // Ensure gsap is imported

const AboutMe = () => {
  const [isClient, setIsClient] = useState(false);

  // Ensure the component is rendered only on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      gsap.fromTo(
        ".about-me-paragraph", // Target element
        { opacity: 0.5 }, // Optional: start invisible
        {
          opacity: 1, // Fully visible
          scrollTrigger: {
            trigger: ".about-me",
            start: "top 10px",
            end: "top 80px",

            scrub: 1,
          },
          duration: 5, // Control animation time
          ease: "power3.out", // Smooth easing
        }
      );
    }
  }, [isClient]);

  const [showAllTech, setShowAllTech] = useState(false);

  const handleToggle = () => {
    setShowAllTech((prev) => !prev);
  };

  const techItems = [
    "Next",
    "React",
    "Laravel",
    "Bootstrap",
    "Tailwind",
    "Wordpress",
    "Flutter",
    "MUI",
    "Woocommerce",
    "Redux",
  ];

  return (
    <div className="md:mt-[520px] about-me" id="about">
      <h1 className="text-center heading mt-12">
        {isClient && (
          <Typewriter
            options={{
              strings: ["About Me"],
              autoStart: true,
              loop: true,
              delay: 200, // Typing speed in milliseconds
              cursor: "|", // Customize the cursor style
            }}
          />
        )}
      </h1>
      <p className="alg-p text-white mx-10 mt-12 text-balance about-me-paragraph">
        I am a passionate and driven web developer and mobile app expert,
        currently pursuing a BSc Hons in Information Technology at the
        University of Moratuwa, where I am in my second year. Alongside my
        academic journey, I contribute to Algorwrite Software Solution, where I
        specialize in web development, particularly in crafting high-performance
        static websites, dynamic e-commerce platforms, site management
        solutions, and custom web applications. I also possess strong expertise
        in mobile app development, blending innovative design with seamless
        functionality to deliver highly engaging user experiences. With a robust
        foundation in both front-end and back-end technologies, I am dedicated
        to creating high-quality, user-centric solutions that drive positive
        business outcomes and enhance user satisfaction. My goal is to continue
        evolving as a developer and contribute meaningful, impactful work to the
        tech industry
      </p>
      {/* Tech Items */}
      <div className="flex flex-wrap mx-10 mt-5 gap-5 justify-center transition-all duration-500">
        {/* For large screens, show all tech items */}
        <div className="hidden md:flex flex-wrap gap-5 justify-center">
          {techItems.map((tech, index) => (
            <Tech
              key={index}
              tech={tech}
              className="transition-opacity duration-500 about-me-paragraph"
            />
          ))}
        </div>
        {/* For small screens, conditionally render */}
        <div className="flex md:hidden flex-wrap gap-5 justify-center">
          {techItems
            .slice(0, showAllTech ? undefined : 2)
            .map((tech, index) => (
              <Tech
                key={index}
                tech={tech}
                className="transition-opacity duration-500"
              />
            ))}
        </div>
      </div>
      {/* Button visible only on small screens */}
      <div className="md:hidden">
        <button
          onClick={handleToggle}
          className="py-1.5 md:py-2 lg:py-2.5 px-5 rounded-full mx-auto block mt-3 bg-[#feb901] text-white  transition-all"
        >
          {showAllTech ? "Show Less" : "View More"}
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
