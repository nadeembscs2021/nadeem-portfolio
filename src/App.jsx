import React, { useState } from "react";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Wrapper from "./utils/Wrapper";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App = () => {
  const [openModal, setOpenModal] = useState({ state: false, Projects: null });
  return (
    <>
      <Navbar />
      {/* body */}
      <div className=" w-full bg-darkTheme-card_light ">
        <HeroSection />
        <Wrapper>
          <Skills />
          <Experience />
        </Wrapper>
        <Projects openModal={openModal} setOpenModal={setOpenModal} />
        <Wrapper>
          <Education />
          <Contact />
        </Wrapper>
        <Footer />
        {openModal.state && (
          <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
        )}
      </div>
    </>
  );
};

export default App;
