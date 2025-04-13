import React from "react";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/NavBar";
import LogoSection from "./components/LogoSection";
import FeatureCards from "./sections/FeatureCards";
import ExpierienceSection from "./sections/ExpierienceSection";
import TechStack from "./sections/TechStack";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
      <ExpierienceSection />
      <TechStack />
    </>
  );
};

export default App;
