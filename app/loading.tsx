"use client";

import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <motion.div
        className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow-lg"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          borderRadius: ["10%", "30%", "50%", "10%"]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default Loader;
