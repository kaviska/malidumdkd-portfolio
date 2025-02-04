"use client";

import React, { useEffect, useRef, useState } from "react";
import { Modal, Box, Fade, Typography } from "@mui/material";
import TechProject from "./TechProject";
import Link from "../public/Link.svg";
import Image from "next/image";
import { ProjectCardProps } from "../type";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  outline: "none", // Removes the black border
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  name,
  workedOn,
  Technology,
  details,
  link,
  color,
}) => {
  const [open, setOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = cardRef.current;
    if (element) {
      gsap.fromTo(
        element,
        { rotateX: -90, opacity: 0 },
        {
          rotateX: 0,
          opacity: 1,
          duration: 2,
          ease: "bounce",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            // Debug with markers if needed
            // markers: true,
          },
        }
      );
    }
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div
        ref={cardRef}
        className="project-card md:flex  bg-[${color}] md:mx-10 mx-3 md:py-5 py-4 rounded-[40px] mt-12"
      
      >
       <div className="md:w-[900px] h-[400px] w-[300px] md:m-4 m-3">
  <Image
    src={image}
    alt="sample"
    className="rounded-[32px] object-cover w-full h-full"
    width={900}
    height={600}
  />
</div>

        <div>
          <div className="flex justify-between">
            <h1 className="text-[40px] text-center md:text-start text-white my-3">
              {name}
            </h1>
            <Image
              src="./info.svg"
              className="inline mx-3 cursor-pointer d-block d-md-none"
              alt="info icon"
              width={25}
              height={25}
              onClick={handleOpen}
            />
          </div>

          <div className="text-white text-[20px]">
            <div className="md:block flex justify-center flex-col items-center">
              <p className="my-3">Worked On</p>
              <div className="flex md:justify-start justify-center gap-2 flex-wrap">
                {workedOn.map((work: string, index: number) => (
                  <button key={index} className="project-btn">
                    {work}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div>
            <p className="text-white text-[20px] my-3 md:text-start text-center">
              Tech I used one
            </p>
            <div className="flex md:justify-start justify-center gap-3 flex-wrap">
              {Technology.map((tech: string, index: number) => (
                <TechProject key={index} tech={tech} className="text-[30px]" />
              ))}
            </div>
          </div>
          <div className="md:block flex justify-center">
            <button
              className="project-btn mr-2 mt-5 flex gap-2"
              onClick={() => window.open(link, "_blank")}
            >
              <Image src={Link} width={20} height={20} alt="link" /> Visit To
              Site
            </button>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Fade in={open}>
          <Box sx={modalStyle}>
            <Typography id="modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              {details}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ProjectCard;
