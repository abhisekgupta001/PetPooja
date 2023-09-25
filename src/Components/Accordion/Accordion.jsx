import React from "react";
import "./Accordion.css";

const Accordion = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="accordion-container">
      <h3>{title}</h3>
      {isVisible ? (
        <button onClick={() => setIsVisible(false)}>Hide</button>
      ) : (
        <button onClick={() => setIsVisible(true)}>Show</button>
      )}

      <p>{isVisible && description}</p>
    </div>
  );
};

export default Accordion;
