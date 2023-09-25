import React from "react";
import "./About.css";
import Accordion from "../Accordion/Accordion";
import { useState } from "react";

const About = () => {
  const [visibleAccordion, setVisibleAccordion] = useState("Projects");
  return (
    <div className="about-wrapper">
      <h2>About page</h2>
      <div className="accordion">
        <Accordion
          title="Sales"
          description="some description 1"
          isVisible={visibleAccordion === "Sales"}
          setIsVisible={() => setVisibleAccordion("Sales")}
        />
        <Accordion
          title="Career"
          description="some description 2"
          isVisible={visibleAccordion === "Career"}
          setIsVisible={() => setVisibleAccordion("Career")}
        />
        <Accordion
          title="Projects"
          description="some description 3"
          isVisible={visibleAccordion === "Projects"}
          setIsVisible={() => setVisibleAccordion("Projects")}
        />
      </div>
    </div>
  );
};

export default About;
