import React, { useEffect, useRef } from 'react';
import {
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
} from '@mui/lab/';
import Image from 'next/image';
import { TimelineProps } from '../type';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TimelineItems: React.FC<TimelineProps> = ({
  dotImage,
  role,
  company,
  logo,
  date,
  descripition,
}) => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = timelineRef.current;
    if (element) {
      gsap.fromTo(
        element,
        { rotateX: -90, opacity: 0 },
        {
          rotateX: 0,
          opacity: 1,
          duration: 2,
          ease: 'bounce',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            // toggleActions: 'play none none none',
            //add markers to debug
            //markers: true,
            //toggleActions: 'play reverse play reverse',
           
          
          },
        }
      );
    }
  }, []);

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot sx={{ width: '30px', backgroundColor: 'grey' }}>
          <Image src={dotImage} width={40} height={40} alt="calendar" />
        </TimelineDot>
        <TimelineConnector sx={{ width: '3px', backgroundColor: 'grey' }} />
      </TimelineSeparator>
      <TimelineContent>
        <div
          ref={timelineRef}
          className="experiecnce-card px-6 py-3 text-white font-thin"
        >
          <div className="flex  justify-between"> 
            <div className="flex flex-col items-start gap-0">
              <span className="alg-p">{role}</span> <br />
              <span className="text-sm mt-[-23px]">{company}</span>
            </div>
            <span>
              <Image className="inline mr-2" src={logo} width={30} height={30} alt="logo" />
              {date}
            </span>
          </div>
          <div className="mt-3  flex flex-col items-start justify-start">
            {descripition.map((point, index) => (
              <span key={`${point}-${index}`} className="">
                <Image
                  src="/point.svg"
                  className="inline ml-[-20px]"
                  alt="point icon"
                  width={40}
                  height={40}
                />
                {point}
              </span>
            ))}
          </div>
        </div>
      </TimelineContent>
    </TimelineItem>
  );
};

export default TimelineItems;
