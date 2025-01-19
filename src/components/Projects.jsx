import React, { useState } from "react";
import { projects } from "../data/constants";
import ProjectCard from "./ProjectCard";
const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <div id="projects" className="relative z-1 bg-gradient-to-b from-opacity-0 via-opacity-6 to-opacity-0 p-2 flex flex-col justify-center items-center">
      {/* wrapper */}
      <div className="relative flex justify-between items-center flex-col w-full max-w-[1350px] p-[10px] pb-[100px] gap-3 ">
        {/* title */}
        <h2 className="md:text-[42px] text-center font-semibold  text-darkTheme-text_primary md:mt-5 mt-3 text-[32px]">
          Projects
        </h2>
        {/* descp */}
        <p className="md:text-[18px] text-center max-w-[600px] text-darkTheme-text_secondary mt-3 text-[16px] md:mt-0">
          {" "}
          I have worked on a variety of web projects, ranging from simple
          designs to dynamic applications. Here are some highlights of my work.
          {/* I have worked on a wide range of web projects. Here are some of my projects. */}
        </p>
        {/* toggle button group */}
        <div className="flex border border-darkTheme-primary text-darkTheme-primary md:text-[16px] font-medium rounded-xl my-5 text-[12px]">
          {toggle === "all" ? (
            <div
              active
              value="all"
              onClick={() => setToggle("all")}
              className={`py-[6px] px-[8px] rounded md:py-2 md:px-[18px] md:rounded-md cursor-pointer active:bg-darkTheme-primary `}
            >
              All
            </div>
          ) : (
            <div
              value="all"
              onClick={() => setToggle("all")}
              className={`py-[6px] px-[8px] rounded md:py-2 md:px-[18px] md:rounded-md cursor-pointer  `}
            >
              All
            </div>
          )}
          <div className="w-[1.5px] bg-darkTheme-primary" />
          {toggle === "web app" ? (
            <div
              active
              value="web app"
              onClick={() => setToggle("web app")}
              className={`py-[6px] px-[8px] rounded md:py-2 md:px-[18px] md:rounded-md cursor-pointer active:bg-darkTheme-primary `}
            >
              WEB APP'S
            </div>
          ) : (
            <div
              value="web app"
              onClick={() => setToggle("web app")}
              className={`py-[6px] px-[8px] rounded md:py-2 md:px-[18px] md:rounded-md cursor-pointer active:bg-darkTheme-primary `}
            >
              WEB APP'S
            </div>
          )}
          <div className="w-[1.5px] bg-darkTheme-primary" />
          {toggle === "android app" ? (
            <div
              active
              value="android app"
              onClick={() => setToggle("android app")}
              className={`py-[6px] px-[8px] rounded md:py-2 md:px-[18px] md:rounded-md cursor-pointer active:bg-darkTheme-primary `}
            >
              ANDROID APP'S
            </div>
          ) : (
            <div
              value="android app"
              onClick={() => setToggle("android app")}
              className={`py-[6px] px-[8px] rounded md:py-2 md:px-[18px] md:rounded-md cursor-pointer  `}
            >
              ANDROID APP'S
            </div>
          )}
          <div className="w-[1.5px] bg-darkTheme-primary" />
          {toggle === "machine learning" ? (
            <div
              active
              value="machine learning"
              onClick={() => setToggle("machine learning")}
              className={`py-[6px] px-[8px] rounded md:py-2 md:px-[18px] md:rounded-md cursor-pointer active:bg-darkTheme-primary `}
            >
              MACHINE LEARNING
            </div>
          ) : (
            <div
              value="machine learning"
              onClick={() => setToggle("machine learning")}
              className={`py-[6px] px-[8px] rounded md:py-2 md:px-[18px] md:rounded-md cursor-pointer  `}
            >
              MACHINE LEARNING
            </div>
          )}
        </div>

        <div className="flex justify-center items-center gap-7 flex-wrap ">
          {toggle === "all" &&
            projects.map((project, index) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
                key={index}
              />
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
