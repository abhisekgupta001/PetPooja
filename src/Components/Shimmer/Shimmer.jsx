import React from "react";
import "./Shimmer.css";

const Shimmer = () => {
  return (
    <div className="shimmer-wrapper innerWidth flex">
      {Array(12)
        .fill("")
        .map((item, i) => {
          return <div key={i} className="shimmer-card"></div>;
        })}
    </div>
  );
};

export default Shimmer;
