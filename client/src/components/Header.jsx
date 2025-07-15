import React from "react";
import { assets } from "../assets/assets";
import { motion as Motion } from "motion/react";
import AppContext from "../context/AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";


const Header = () => {

    const { user, setOpen } = useContext(AppContext);
    const navigate = useNavigate();

    const handleClick = () => {
      if (user) {
        navigate("/result");
      } else {
        // scrollTo(0, 0);
        setOpen(true);
      }
    };


  return (
    <Motion.div
      className="flex flex-col items-center justify-center text-center my-10"
      initial={{ opacity: 0.1, y: 100 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Motion.div
        className="inline-flex text-center gap-2 text-stone-500 bg-white px-6 py-1 rounded-full border border-neutral-500 "
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p>Best text to image generator ever</p>
        <img src={assets.star_icon} alt="" />
      </Motion.div>

      <Motion.h1
        className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center"
        initial={{ opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Turn text to <span className="text-blue-600">image</span>, in seconds.
      </Motion.h1>

      <Motion.p
        className="text-center max-w-xl mx-auto mt-5 text-stone-500"
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Unleash your creativity with AI. Turn your imagination into visual art
        in seconds - just type, and watch the magic happen.
      </Motion.p>

      <Motion.button
        className="flex items-center gap-2 sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 rounded-full cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          default: { duration: 0.5 },
          opacity: { delay: 0.8, duration: 1 },
        }}
        onClick={handleClick}
      >
        Generate Now
        <img className="h-6" src={assets.star_group} alt="" />
      </Motion.button>

      {/* Images */}
      <Motion.div
        className="flex flex-wrap justify-center gap-2 mt-15"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        {Array(6)
          .fill("")
          .map((item, index) => (
            <Motion.img
              whileHover={{ scale: 1.1, duration: 0.1 }}
              whileTap={{ scale: 0.9 }}
              className="rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10"
              key={index}
              width={70}
              src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
              alt=""
            />
          ))}
      </Motion.div>
      
      <Motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="text-sm text-neutral-600 mt-2">
        Generated images by Imagify
      </Motion.p>
    </Motion.div>
  );
};

export default Header;
