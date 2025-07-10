"use client";

import React, { useEffect, useRef, useState } from "react";
import { Modal, Box, Fade, Typography, IconButton } from "@mui/material";
import TechProject from "./TechProject";
import Link from "../public/Link.svg";
import Image from "next/image";
import { ProjectCardProps } from "../type";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: "80%", md: 600 },
  maxWidth: "600px",
  bgcolor: "background.paper",
  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  p: { xs: 3, md: 4 },
  borderRadius: "16px",
  outline: "none",
  maxHeight: "90vh",
  overflow: "auto",
};

interface ExtendedProjectCardProps extends ProjectCardProps {
  index?: number;
}

const ProjectCard: React.FC<ExtendedProjectCardProps> = ({
  image,
  name,
  workedOn,
  Technology,
  details,
  link,
  color = "#0084ea",
  index = 0,
}) => {
  const [open, setOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = cardRef.current;
    if (element) {
      gsap.fromTo(
        element,
        {
          y: 100,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [index]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div
        ref={cardRef}
        className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
        style={{
          background: `linear-gradient(135deg, ${color}20 0%, ${color}10 50%, transparent 100%)`,
          border: `1px solid ${color}30`,
        }}
      >
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />

        <div className="relative p-6 md:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8 min-h-[500px] md:min-h-[400px]">
          {/* Image Section */}
          <div className="lg:w-1/2 xl:w-2/5 flex-shrink-0">
            <div className="relative h-full min-h-[300px] lg:min-h-full rounded-2xl overflow-hidden bg-gray-800">
              <Image
                src={image}
                alt={name}
                fill
                className={`object-cover transition-all duration-700 ${
                  imageLoaded ? "scale-100 opacity-100" : "scale-110 opacity-0"
                } group-hover:scale-105`}
                onLoad={() => setImageLoaded(true)}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              />
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gray-700 animate-pulse" />
              )}

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 xl:w-3/5 flex flex-col justify-between">
            {/* Header */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  {name}
                </h2>
                <button
                  onClick={handleOpen}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 backdrop-blur-sm"
                  aria-label="View project details"
                >
                  <Image
                    src="./info.svg"
                    alt="info"
                    width={20}
                    height={20}
                    className="opacity-80"
                  />
                </button>
              </div>

              {/* Worked On Section */}
              <div className="mb-6">
                <h3 className="text-white/90 text-lg font-semibold mb-3">
                  Worked On
                </h3>
                <div className="flex flex-wrap gap-2">
                  {workedOn.map((work: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-white/10 text-white text-sm rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors duration-200"
                    >
                      {work}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technologies Section */}
              <div className="mb-6">
                <h3 className="text-white/90 text-lg font-semibold mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {Technology.map((tech: string, index: number) => (
                    <TechProject
                      key={index}
                      tech={tech}
                      className="text-sm hover:scale-110 transition-transform duration-200"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Action Button */}
            {link && (
              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => window.open(link, "_blank")}
                  className="group/btn inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <Image
                    src={Link}
                    width={20}
                    height={20}
                    alt="link"
                    className="group-hover/btn:rotate-12 transition-transform duration-200"
                  />
                  Visit Project
                  <svg
                    className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        }}
      >
        <Fade in={open}>
          <Box sx={modalStyle}>
            <div className="flex items-start justify-between mb-4">
              <Typography
                id="modal-title"
                variant="h4"
                component="h2"
                className="font-bold text-gray-900"
              >
                {name}
              </Typography>
              <IconButton
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-700"
                size="small"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </IconButton>
            </div>

            <Typography
              id="modal-description"
              className="text-gray-700 leading-relaxed text-lg"
              sx={{ mt: 2 }}
            >
              {details}
            </Typography>

            {link && (
              <div className="mt-6 pt-4 border-t border-gray-200">
                <button
                  onClick={() => window.open(link, "_blank")}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#FEB901] hover:yellow-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  <Image src={Link} width={16} height={16} alt="link" />
                  View Project
                </button>
              </div>
            )}
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ProjectCard;
