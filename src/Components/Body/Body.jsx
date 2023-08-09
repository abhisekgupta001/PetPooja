import CardComponent from "../CardComponent/CardComponent";
import "./Body.css";
import { IMG_URL } from "../../Constant";
import useOnline from "../../utils/useOnline";
import Hero from "../Hero/Hero";

const Body = () => {
  const isOnline = useOnline();
  return isOnline ? (
    <div className="b-container">
      <Hero />
      <div className="innerWidth b-wrapper flex">
        <div className="hero-container flex">
          <img
            src={IMG_URL + "b44b1aec941e86a62ed4cea29eec9122"}
            alt="hero image1"
            className="hero-image1"
          />
          <img
            src={IMG_URL + "a1d4810114a903dee5e8df241ae79f49"}
            alt="hero image2"
            className="hero-image2"
          />
        </div>
        <CardComponent />
      </div>
    </div>
  ) : (
    <h1>Please check your Internet Connection</h1>
  );
};

export default Body;
