import React from "react";
import Hero from "../components/Hero";
import Steps from "../components/Steps";
import BGSlider from "../components/BGSlider";
import Testimonials from "../components/Testimonials";
import Upload from "../components/Upload";

const Home = () => {
  return (
    <div>
      <Hero />
      <Steps />
      <BGSlider />
      <Testimonials />
      <Upload />
    </div>
  );
};

export default Home;
