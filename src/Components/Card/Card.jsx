import "./Card.css";
import { CARD_IMG_URL } from "../../Constant";
import LinesEllipsis from "react-lines-ellipsis";

const Card = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="card flex">
      <div className="img-container">
        <img src={CARD_IMG_URL + cloudinaryImageId} alt="restaurant" />
      </div>
      <div className="detail-container flex">
        <h3 className="r-name">{name}</h3>
        <LinesEllipsis
          text={cuisines.join(", ")}
          maxLine="1"
          ellipsis="..."
          trimRight
          basedOn="words"
        />
        <span className="rating">{avgRating} ⭐</span>
      </div>
    </div>
  );
};

export default Card;
