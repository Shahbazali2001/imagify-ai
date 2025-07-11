import React from "react";
import { assets } from "../assets/assets";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { motion as Motion } from "motion/react";

const GenerateButton = () => {

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
    <Motion.div className="flex flex-col items-center justify-center my-24 p-6 md:px-28"
    initial={{ opacity: 0, y: 100 }}
    transition={{ duration: 1.5 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    >
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2 text-center">
        See the magic. Try now
      </h1>
      <Motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          default: { duration: 0.5 },
          opacity: { delay: 0.8, duration: 1 },
        }}
        onClick={handleClick} 
        className="flex items-center gap-2 sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 rounded-full cursor-pointer">
        Generate Images
        <img className="h-6" src={assets.star_group} alt="" />
      </Motion.button>
    </Motion.div>
  );
};

export default GenerateButton;
