import React from "react";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import myImage from "../public/contactme.jpeg";
import telegramIcon from "../public/telegram.svg";
import phone from "../public/phone.svg";
import email from "../public/email.svg";

const styLeObject = {
  sx: {
    width: "70%", // Set the desired width
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
    <div className="flex mx-4 mt-10">
      {/* Left Section */}
      <div className="w-3/5 flex flex-col pl-56 py-4">
        <h1 className="text-white text-[70px]">
          Let&lsquo;s Start a <br /> Project Together
        </h1>
        <div className="mt-28">
          <Divider
            sx={{ borderColor: "white", width: "85%", margin: "0px 0" }}
          />

          {inputFields.map((field, index) => (
            <div key={index}>
              <TextField
                label={field.label}
                variant={field.variant}
                sx={field.styleObject.sx}
                multiline={field.multiline || false}
                rows={field.rows || undefined}
              />
            </div>
          ))}
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

      {/* Right Section */}
      <div className="w-2/5 flex flex-col gap-6  pt-32 px-20">
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
            ></Image>kaviska525@gmail.com</span> <br />
        </div>
        <div className="mt-6">
          <span className="text-gray-400">Address </span> <br /> <br />
          <span className="text-white">
            220/3, <br /> Meegahawata Road, <br />
            Wanawasala Kelaniya
          </span>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ContactUs;
