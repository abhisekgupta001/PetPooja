import "./CardComponent.css";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from "react-router-dom";

const CardComponent = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurant, setRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const API1 =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.42716130862859&lng=78.3261439204216&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTINGhttps://www.google.com/search?q=ttps%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D17.42716130862859%26lng%3D78.3261439204216%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING&rlz=1C1GCEA_enIE1011IE1011&oq=ttps%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D17.42716130862859%26lng%3D78.3261439204216%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING&aqs=chrome..69i57j69i58.501j0j7&sourceid=chrome&ie=UTF-8";
  const API2 =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.437640097812057&lng=78.3650568022413&page_type=DESKTOP_WEB_LISTING";

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(API1);
        const json = await response.json();
        const restaurantsFromAPI =
          json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        setRestaurant(restaurantsFromAPI);
        setFilteredRestaurants(restaurantsFromAPI);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRestaurants();
  }, []);

  const filterRestaurant = (searchInput, restautrantList) => {
    const filteredRestaurantList = restautrantList?.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredRestaurants(filteredRestaurantList);
  };

  return (
    <div className="innerWidth card-section flex">
      <div className="card-above flex">
        <h1>Restaurants</h1>
        <div className="s-container flex">
          <input
            type="text"
            placeholder="Search food..."
            value={searchInput}
            className="searchBar"
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key === `Enter`) {
                filterRestaurant(searchInput, restaurant);
              }
            }}
          />
          <input
            type="button"
            value="Search"
            className="searchButton"
            onClick={() => filterRestaurant(searchInput, restaurant)}
          />
        </div>
      </div>
      <div className="card-container flex">
        {filteredRestaurants?.length == 0 && searchInput.length != 0 ? (
          <span>No result found.</span>
        ) : filteredRestaurants?.length == 0 && searchInput.length == 0 ? (
          <Shimmer />
        ) : (
          filteredRestaurants?.map((item, i) => {
            return (
              <Link to={"/restaurant/" + item.info.id} key={item.info.id}>
                <Card {...item.info} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default CardComponent;
