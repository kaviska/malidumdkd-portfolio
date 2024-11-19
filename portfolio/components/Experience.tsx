import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
} from "@mui/lab/";
import Image from "next/image";
import Technology from "./Technology";

const Experience = () => {
  return (
    <>
    <div className="background-image-experience">
      <h1 className="text-center heading mt-[50px]">Experience</h1>

      <Timeline position="alternate" className="">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ width: "30px", backgroundColor: "grey" }}>
              <Image
                src="./calender.svg"
                width={40}
                height={40}
                alt="claender"
                className="inline mr-2"
              />
            </TimelineDot>
            <TimelineConnector sx={{ width: "3px", backgroundColor: "grey" }} />
          </TimelineSeparator>
          <TimelineContent>
            <div className=" experiecnce-card px-3 text-white font-thin ">
              <div className="flex justify-between">
                <div>
                  <span className="alg-p ">Backend Developer </span> <br />
                  <span className="text-sm">Algowrite Software Solution</span>
                </div>
                <span className="">
                  <Image
                    src="./calender.svg"
                    width={40}
                    height={40}
                    alt="claender"
                    className="inline mr-2"
                  />
                  July 2021 - Present
                </span>
              </div>

              <ul className="mt-3">
                <li>
                  <Image
                    src="./point.svg"
                    alt="point icon"
                    width={40}
                    height={40}
                    className="inline"
                  ></Image>
                  Worked on the backend of the website
                </li>
                <li>
                  <Image
                    src="./point.svg"
                    alt="point icon"
                    width={40}
                    height={40}
                    className="inline"
                  ></Image>
                  Worked on the backend of the website
                </li>
                <li>
                  <Image
                    src="./point.svg"
                    alt="point icon"
                    width={40}
                    height={40}
                    className="inline"
                  ></Image>
                  Worked on the backend of the website
                </li>
                <li>
                  <Image
                    src="./point.svg"
                    alt="point icon"
                    width={40}
                    height={40}
                    className="inline"
                  ></Image>
                  Worked on the backend of the website
                </li>
              </ul>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ width: "30px", backgroundColor: "grey" }}>
              <Image
                src="./calender.svg"
                width={40}
                height={40}
                alt="claender"
                className="inline mr-2"
              />
            </TimelineDot>
            <TimelineConnector sx={{ width: "3px", backgroundColor: "grey" }} />
          </TimelineSeparator>
          <TimelineContent>
            <div className=" experiecnce-card px-3 text-white font-thin ">
              <div className="flex justify-between flex-raw-reverse">
                <div className="flex flex-col">
                  <span className="alg-p ">Backend Developer </span>
                  <span className="text-sm text-start">
                    Algowrite Software Solution
                  </span>
                </div>
                <span className="">
                  <Image
                    src="./calender.svg"
                    width={40}
                    height={40}
                    alt="claender"
                    className="inline mr-2"
                  />
                  July 2021 - Present
                </span>
              </div>

              <ul className="mt-3  flex flex-col justify-end items-start">
                <li>
                  <Image
                    src="./point.svg"
                    alt="point icon"
                    width={40}
                    height={40}
                    className="inline"
                  ></Image>
                  Worked on the backend of the website
                </li>
                <li>
                  <Image
                    src="./point.svg"
                    alt="point icon"
                    width={40}
                    height={40}
                    className="inline"
                  ></Image>
                  Worked on the backend of the website
                </li>
                <li>
                  <Image
                    src="./point.svg"
                    alt="point icon"
                    width={40}
                    height={40}
                    className="inline"
                  ></Image>
                  Worked on the backend of the website
                </li>
                <li>
                  <Image
                    src="./point.svg"
                    alt="point icon"
                    width={40}
                    height={40}
                    className="inline"
                  ></Image>
                  Worked on the backend of the website
                </li>
              </ul>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ width: "30px", backgroundColor: "grey" }}>
              <Image
                src="./calender.svg"
                width={40}
                height={40}
                alt="claender"
                className="inline mr-2"
              />
            </TimelineDot>
            <TimelineConnector sx={{ width: "3px", backgroundColor: "grey" }} />
          </TimelineSeparator>
          <TimelineContent>
            <div className=" experiecnce-card px-3 text-white font-thin ">
              <div className="flex justify-between">
                <div>
                  <span className="alg-p ">Backend Developer </span> <br />
                  <span className="text-sm">Algowrite Software Solution</span>
                </div>
                <span className="">
                  <Image
                    src="./calender.svg"
                    width={40}
                    height={40}
                    alt="claender"
                    className="inline mr-2"
                  />
                  July 2021 - Present
                </span>
              </div>

              <ul className="mt-3">
                <li>
                  <Image
                    src="./point.svg"
                    alt="point icon"
                    width={40}
                    height={40}
                    className="inline"
                  ></Image>
                  Worked on the backend of the website
                </li>
                <li>
                  <Image
                    src="./point.svg"
                    alt="point icon"
                    width={40}
                    height={40}
                    className="inline"
                  ></Image>
                  Worked on the backend of the website
                </li>
                <li>
                  <Image
                    src="./point.svg"
                    alt="point icon"
                    width={40}
                    height={40}
                    className="inline"
                  ></Image>
                  Worked on the backend of the website
                </li>
                <li>
                  <Image
                    src="./point.svg"
                    alt="point icon"
                    width={40}
                    height={40}
                    className="inline"
                  ></Image>
                  Worked on the backend of the website
                </li>
              </ul>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ width: "30px", backgroundColor: "grey" }}>
              <Image
                src="./calender.svg"
                width={40}
                height={40}
                alt="claender"
                className="inline mr-2"
              />
            </TimelineDot>
            <TimelineConnector sx={{ width: "3px", backgroundColor: "grey" }} />
          </TimelineSeparator>
          <TimelineContent>
            <div className=" experiecnce-card px-3 text-white font-thin ">
              <div className="flex justify-between flex-raw-reverse">
                <div className="flex flex-col">
                  <span className="alg-p ">Backend Developer </span>
                  <span className="text-sm text-start">
                    Algowrite Software Solution
                  </span>
                </div>
                <span className="">
                  <Image
                    src="./calender.svg"
                    width={40}
                    height={40}
                    alt="claender"
                    className="inline mr-2"
                  />
                  July 2021 - Present
                </span>
              </div>

              <ul className="mt-3  flex flex-col justify-end items-start">
                <li>
                  <Image
                    src="./point.svg"
                    alt="point icon"
                    width={40}
                    height={40}
                    className="inline"
                  ></Image>
                  Worked on the backend of the website
                </li>
                <li>
                  <Image
                    src="./point.svg"
                    alt="point icon"
                    width={40}
                    height={40}
                    className="inline"
                  ></Image>
                  Worked on the backend of the website
                </li>
                <li>
                  <Image
                    src="./point.svg"
                    alt="point icon"
                    width={40}
                    height={40}
                    className="inline"
                  ></Image>
                  Worked on the backend of the website
                </li>
                <li>
                  <Image
                    src="./point.svg"
                    alt="point icon"
                    width={40}
                    height={40}
                    className="inline"
                  ></Image>
                  Worked on the backend of the website
                </li>
              </ul>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    
    </div>
      <div className="flex justify-center gap-4 mx-10 mt-30 flex-wrap">
      <Technology icon="React" />
      <Technology icon="React" />
      <Technology icon="React" />
      <Technology icon="React" />
      <Technology icon="React" />

      <Technology icon="React" />
      <Technology icon="React" />
      <Technology icon="React" />
      <Technology icon="React" />
      <Technology icon="React" />

      <Technology icon="React" />
      <Technology icon="React" />
      <Technology icon="React" />
      <Technology icon="React" />
      <Technology icon="React" />
    </div>
    </>
  );
};

export default Experience;
