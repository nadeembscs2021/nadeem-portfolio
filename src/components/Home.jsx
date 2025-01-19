import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import image from "../assets/avatar.png";

const Home = () => {
  return (
    <div className="border-4 border-red-600 h-[calc(100vh-5rem)] to-gray-900 flex items-center justify-center" >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 md:flex-row">
        <div className="w-full border-4 border-red-600 md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsum
            non ratione iusto, quas ducimus praesentium amet consectetur autem
            dignissimos fugiat qui et quo error, dicta nostrum laboriosam minima
            repudiandae?
          </p>
          <div>
            <button className="group text-white px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:bg-blue-600 transition duration-300">
              Portfolio{" "}
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={27} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div className="border-4 border-red-600 w-[50%] md:w-1/2 mb-20">
          <img
            className="rounded-b-2xl object-cover mx-auto w-full md:w-4/5 lg:w-3/4 xl:w-2/3"
            src={image}
            alt="my profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
