import React from "react";

const Document = ({ src }) => (
  <img
    className="hidden group-hover:flex w-auto h-70 bg-black rounded-lg transition-all duration-300 opacity-0 hover:opacity-80 cursor-pointer"
    src={src}
    alt="Document"
  />
);
const ExperienceCard = ({ experience }) => {
  return (
    <>
 
      {/* card */}
      <div className="group  p-[10px] gap-2 w-[300px] md:w-[650px] md:gap-3 md:py-3 md:px-4 rounded-lg flex flex-col justify-between relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-[306ee8] overflow-hidden ">
        {/* top */}

        <div className="w-full flex gap-3">
          <img
            src="https://liveimages.algoworks.com/new-algoworks/wp-content/uploads/2022/06/07125022/software-house-featured-image.png"
            alt=""
            className="h-10 md:h-[50px] mt-1 bg-[#000] rounded-lg "
          />

          {/* card body */}
          <div className="w-full flex flex-col">
            <h1 className="text-[14px] md:text-[18px] font-semibold text-darkTheme-text_secondary">
              {experience.role}
            </h1>
            <p className="text-[12px] md:text-sm font-medium text-darkTheme-text_secondary">
              {experience.company}
            </p>
            <p className=" text-[10px] md:text-[12px] font-normal text-darkTheme-text_secondary">
              {experience.date}
            </p>
          </div>
        </div>

        {/* desc */}
        <div className="text-[12px] md:text-[15px] font-normal w-full mb-[10px] text-darkTheme-text_secondary ">
          {experience?.desc && (
            <span className="group-hover:line-clamp-none group-hover:overflow-visible  overflow-hidden block max-w-full line-clamp-2 leading-tight  ">
              {experience?.desc}
            </span>
          )}
          {experience?.skills && (
            <>
              <br />
              <div className="w-full flex gap-12 mt-[-10px]">
                <b>Skills:</b>
                <div className="flex flex-wrap gap-2">
                  {experience?.skills?.map((skill, index) => (
                    <div key={index} className=" text-[12px] md:text-[15px] font-normal text-darkTheme-text_secondary">
                      • {skill}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
        {experience?.doc && (
          <a href={experience.doc} target="new">
            <Document src={experience.doc} />
          </a>
        )}
      </div>
    </>
  );
};

export default ExperienceCard;
