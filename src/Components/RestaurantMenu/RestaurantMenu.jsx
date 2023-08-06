import React, { useEffect, useState } from "react";
import "./RestaurantMenu.css";
import { useParams } from "react-router-dom";
import { CARD_IMG_URL, MENU_ITEM_IMAGE } from "../../Constant";

const RestaurantMenu = () => {
  const { resID } = useParams();
  const [menuItem, setMenuItem] = useState([]);
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getMenu(resID);
  }, []);

  const getMenu = async (restaurantID) => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.7272349&lng=83.3021004&restaurantId=${restaurantID}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await response.json();
    const allCardArray =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const restaurantInfo = json?.data?.cards[0]?.card?.card?.info;
    setRestaurant(restaurantInfo);
    const allItemArray = allCardArray.map((item) =>
      item?.card?.card?.itemCards?.map((oneItem) => oneItem?.card?.info)
    );
    const categoryItem = allItemArray?.map((i) => i?.map((j) => j));
    setMenuItem(categoryItem.flat());
  };

  return (
    <div className="menu-wrapper innerWidth flex">
      <div className="left-menu flex">
        <div className="menu-image-wrapper">
          <img
            className="menu-rest-img"
            src={CARD_IMG_URL + restaurant?.cloudinaryImageId}
          />
        </div>
        <div className="menu-detail-wrapper">
          <span className="resID">Restaurant ID: {resID}</span>
          <h2 className="name">{restaurant?.name}</h2>
          <p className="cuisines">{restaurant?.cuisines?.join(", ")}</p>
          <p className="address">
            {restaurant?.locality + ", " + restaurant?.areaName}
          </p>
          <p className="ratings">
            {restaurant?.avgRating} ⭐ | Total Ratings:{" "}
            {restaurant?.totalRatingsString}
          </p>
        </div>
      </div>
      <div className="right-menu">
        <h3>What would you like to have today:</h3>
        <div className="menu-items-container">
          {menuItem.map((item, i) => {
            return item ? (
              <div className="menu-items" key={i}>
                <div className="detail">
                  <p className="item-name">{item?.name}</p>
                  <p>
                    Rs.{" "}
                    {Math.trunc(item?.price / 100)
                      ? Math.trunc(item?.price / 100)
                      : ""}
                  </p>
                  <p className="item-rating">
                    {item?.ratings?.aggregatedRating?.rating != undefined
                      ? item?.ratings?.aggregatedRating?.rating +
                        " | " +
                        item?.ratings?.aggregatedRating?.ratingCount
                      : ""}
                  </p>
                </div>
                <div className="addToCartContainer">
                  <img
                    src={item?.imageId ? MENU_ITEM_IMAGE + item?.imageId : ""}
                    className="menu-item-image"
                  />
                  <button className="btn-addToCart">Add</button>
                </div>
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
