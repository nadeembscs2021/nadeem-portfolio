import React from "react";
import { skills } from "../data/constants";

const Skills = () => {
  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center z-10 relative"
    >
      {/* wrapper */}
      <div className="flex flex-col items-center justify-between w-full max-w-6xl relative gap-3">
        <h1 className="mt-3 text-darkTheme-text_primary text-3xl md:mt-5 font-semibold items-center md:text-4xl">
          Skills
        </h1>
        <p className="text-[16px] md:text=[18px] text-center max-w-[600px] text-darkTheme-text_secondary ">
          Here are some of my skills on which I have been working for the past 2
          years.
        </p>

        <div className="w-full flex justify-center gap-7 flex-wrap mt-7">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="mx-w-[330px] py-2 px-9 sm:max-w-[400px] w-full md:max-w-[500px] bg-darkTheme-card ring-1 ring-purple-950  md:py-5 md:px-9  rounded-2xl shadow-xl"
            >
              <h2 className="text-2xl font-semibold text-darkTheme-text_secondary mb-4 text-center">
                {skill.title}
              </h2>
              <div className="flex flex-wrap gap-4 justify-center mb-3">
                {skill.skills.map((item) => (
                  <div
                    key={item.name}
                    className="text-sm py-[6px] px-3 md:py-3 md:px-4 rounded-xl text-darkTheme-text_secondary flex items-center justify-center gap-2 border border-darkTheme-text_primary"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-6 h-6 "
                    />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
