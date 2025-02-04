'use client';
import React from "react";
import Button from "./Button";
import Typewriter from 'typewriter-effect';


const Hero = () => {
  return (
    
    <div className="md:px-5 md:mt-3 mt-14 flex justify-center flex-col items-center hero" id="home">
      <div className="alg-prime alg-p">
        <button className="button-prime text-white  alg-p">
          ❤ Hello! I am&nbsp;{" "}<span className="alg-prime">
      {/* <Typical
        steps={['Kaviska Dishan', 10000, 'Web Developer', 10000]}
        loop={Infinity}
        wrapper="span"
      /> */}

<Typewriter
  onInit={(typewriter) => {
    typewriter
      .typeString("Kaviska Dishan")
      .pauseFor(10000) // Pause for 10 seconds
      .deleteAll()
      .typeString("Web Developer")
      .pauseFor(10000) // Pause again
      .start();
  }}
/>
      
    </span>
          {/* <span className="alg-prime alg-p"> Kaviska Dilshan</span> */}
        </button>{" "}
      </div>
      <div className="flex   alg-prime items-center alg-h1 md:mt-4 mt-4">
        <h1 className="md:mx-24 mx-5 text-center text-white line md:leading-[5rem]">
          Expert <span className="alg-prime"> Web</span> &{" "}
          <span className="alg-prime">Mobile-App</span> Development, Including{" "}
          <span className="alg-prime">Saas</span> Solutions
        </h1>
      </div>
      <div>
        <p className="alg-p text-center text-white mt-4 md:mx-24 mx-5 md:leading-9 leading-6">
          I&lsquo;m a versatile <b>web and mobile app developer</b>  with over&nbsp;
          <span className="buttton-secondary">4+ Years </span>&nbsp;of
          experience in building intuitive, responsive applications.
          Specializing in <b>MERN</b>  and <b>Laravel</b>  for web, I also bring expertise in
          crafting high-performance solutions tailored to <b>SaaS</b>  and <b>eCommerce </b>
          need
        </p>
      </div>
      <div className="mt-4">
      <a href="/cv.pdf" download="Kaviska_Dishan_CV.pdf">

        <Button
          title="Download CV"
          className="alg-p alg-prime mt-4 button-third"
          icon="download"
          iconTwo="download-white"
          ></Button>
          <Button
          title="Hire Me"
          className="alg-p button-forth mt-4 ml-4"
          ></Button>
          </a>
         
      </div>
    </div>
  );
};

export default Hero;
