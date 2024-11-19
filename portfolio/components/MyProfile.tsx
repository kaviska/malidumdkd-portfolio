import React from "react";
import Image from "next/image";
import bgImage from "../public/me.png";
import Tech from "./Tech";

const MyProfile = () => {
  return (
    <div>
      <div className="text-center flex justify-center relative items-center">
        <Image
          src={bgImage}
          alt="background"
          className="ml-20 relative mt-[0px]"
          width={800}
        ></Image>
        <Tech tech="Next" className="absolute  left-[35%] top-[20%]"></Tech>
        <Tech tech="React" className="absolute left-[27%] top-[35%]"></Tech>
        <Tech tech="Laravel" className="absolute left-[19%] top-[50%]"></Tech>
        <Tech tech="Bootstrap" className="absolute left-[27%] top-[65%]"></Tech>
        <Tech tech="Tailwind" className="absolute left-[35%] top-[80%]"></Tech>

        <Tech tech="Next" className="absolute  right-[35%] top-[20%]"></Tech>
        <Tech tech="React" className="absolute right-[27%] top-[35%]"></Tech>
        <Tech tech="Laravel" className="absolute right-[19%] top-[50%]"></Tech>
        <Tech tech="Bootstrap" className="absolute right-[22%] top-[65%]"></Tech>
        <Tech tech="Tailwind" className="absolute right-[30%] top-[80%]"></Tech>
      </div>
    
    </div>
  );
};

export default MyProfile;
