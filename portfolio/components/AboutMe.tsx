import React from "react";
import Tech from "./Tech";

const AboutMe = () => {
  return (
    <div className="mt-[300px]">
      <h1 className="text-center heading">About Me</h1>
      <p className="alg-p text-white mx-10 mt-4">
        A passionate Front End Developer with a Master&apos;s in Computer
        Application and over 4.7 years of experience in crafting captivating
        digital experiences. My expertise lies in leveraging cutting-edge
        technologies such as ReactJS, NextJS, Apollo GraphQL, Redux, React
        Query, and various UI frameworks including Material UI, NextUI, SCSS,
        Tailwind CSS, Chakra UI, and Bootstrap. I take pride in my ability to
        design seamless user interfaces and components that align perfectly with
        the intended aesthetic, creating responsive websites that adapt
        gracefully to any device. My skill set also extends to proficient API
        integration, ensuring the seamless flow of data between the front end
        and back end. In addition, I am known for writing clean, well-structured
        code that not only functions flawlessly but also enhances the overall
        maintainability of projects. With a track record of contributing to
        well-known products like CricTracker, SportsBuzz, and Epiko Market, I am
        committed to pushing the boundaries of web development to deliver
        exceptional digital solutions.
      </p>
      <div className="flex flex-wrap mx-10 mt-5 gap-5 justify-center">
        <Tech tech="Next" className="  "></Tech>
        <Tech tech="React" className=" "></Tech>
        <Tech tech="Laravel" className=" "></Tech>
        <Tech tech="Bootstrap" className=" "></Tech>
        <Tech tech="Tailwind" className=" "></Tech>

        <Tech tech="Next" className="  "></Tech>
        <Tech tech="React" className=" "></Tech>
        <Tech tech="Laravel" className=""></Tech>
        <Tech
          tech="Bootstrap"
          className=" right-[22%] top-[65%]"
        ></Tech>
        <Tech tech="Tailwind" className=" right-[30%] top-[80%]"></Tech>
      </div>
    </div>
  );
};

export default AboutMe;
