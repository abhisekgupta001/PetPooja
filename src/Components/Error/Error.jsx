import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex innerWidth error-wrapper">
      <h1>404!! Page Not found</h1>
      <Link to="/">
        <button>Go back to Home</button>
      </Link>
    </div>
  );
};

export default Error;
