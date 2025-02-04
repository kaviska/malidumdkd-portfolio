import React from "react";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import myImage from "../public/contactme.jpeg";
import telegramIcon from "../public/telegram.svg";
import phone from "../public/phone.png";
import email from "../public/email.png";
import facebook from "../public/facebook.svg";
import github from "../public/github.svg";
import lindkin from "../public/lindkin.svg";
import whatsapp from "../public/whatsapp.svg";

const styLeObject = {
  sx: {
    width: { xs: '100%', sm: '100%', md: '180%' , lg: '180%' },
    margin: "74px 0 0px 0",
    "& .MuiInput-underline:before": {
      borderBottomColor: "white", // Default underline color
    },
    "& .MuiInput-underline:hover:before": {
      borderBottomColor: "lightgray", // Hover underline color
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#feb901", // Focused underline color
    },
    "& .MuiInputLabel-root": {
      color: "white", // Default label color
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#feb901", // Focused label color
    },
    "& .MuiInputBase-input": {
      color: "white", // Change text color to white for all input fields
    },
    "& .MuiInputBase-input::placeholder": {
      color: "rgba(255, 255, 255, 0.7)", // Optional: Adjust placeholder color
    },
  },
};


const inputFields = [
  {
    label: "* \u00A0 Your Name",
    variant: "standard",
    styleObject: styLeObject,
  },
  {
    label: "* \u00A0 Your Email",
    variant: "standard",
    styleObject: styLeObject,
  },
  {
    label: "* \u00A0 Your Phone",
    variant: "standard",
    styleObject: styLeObject,
  },
  {
    label: "* \u00A0 Your Message",
    variant: "standard",
    styleObject: styLeObject,
    multiline: true,
    rows: 4, // Optional: for textarea-like input
  },
];

const ContactUs = () => {
  return (
    <div className="flex mx-4 mt-10" id="contact">
      {/* Left Section */}
      <div className="md:w-3/5 flex flex-col md:pl-56 py-4">
        <h1 className="text-white md:text-[70px] text-[50px] md:text-start text-center">
          Let&lsquo;s Start a <br /> Project Together
        </h1>
        <div className="md:mt-28   flex flex-col   md:items-start items-center">
        <div style={{ width: "100%", height: "auto" }}>
  <Divider
    sx={{
      borderColor: "white",
      width: "100%",
      height: "2px",
    }}
  />
</div>


          <div className="">
            {inputFields.map((field, index) => (
              <div key={index}>
                <TextField
                  label={field.label}
                  variant={field.variant}
                  sx={field.styleObject.sx}
                  multiline={field.multiline || false}
                  rows={field.rows || undefined}
                />+
              </div>
            ))}
          </div>

          <div>
            <button className="contact-btn text-white text-[19px] mt-10">
              <Image
                src={telegramIcon}
                width={30}
                height={30}
                className="mr-4"
                alt="telegram-icon"
              />{" "}
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-2/5 md:flex md:flex-col hidden gap-6  pt-32 px-20">
        <Image
          src={myImage}
          alt="me"
          width={150}
          height={150}
          className="rounded-full"
        ></Image>
        <div className="mt-6">
          <span className="text-gray-400">CONTACT DETAILS</span> <br /> <br />
          <span className="text-white">
            <Image
              src={phone}
              alt="me"
              width={20}
              height={20}
              className="mr-4 inline"
            ></Image>
            0782099179
          </span>{" "}
          <br />
          <span className="text-white">
            <Image
              src={email}
              alt="me"
              width={20}
              height={20}
              className="mr-4 inline"
            ></Image>
            kaviska525@gmail.com
          </span>{" "}
          <br />
        </div>
        <div className="mt-6">
          <span className="text-gray-400">Address </span> <br /> <br />
          <span className="text-white">
            220/3, <br /> Meegahawata Road, <br />
            Wanawasala Kelaniya
          </span>
        </div>
        <div className="mt-6">
          <span className="text-gray-400">Social Icons </span>
          <div className="flex gap-3 mt-4">
            <Image
              src={facebook}
              alt="me"
              width={30}
              height={30}
              className=""
            ></Image>
            <Image
              src={github}
              alt="me"
              width={30}
              height={30}
              className=""
            ></Image>

            <Image
              src={lindkin}
              alt="me"
              width={30}
              height={30}
              className=""
            ></Image>

            <Image
              src={whatsapp}
              alt="me"
              width={30}
              height={30}
              className=""
            ></Image>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ContactUs;
