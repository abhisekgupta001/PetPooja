export const IMG_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/";
export const CARD_IMG_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const MENU_ITEM_IMAGE =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

export const SWIGGY_API =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.437640097812057&lng=78.3650568022413&page_type=DESKTOP_WEB_LISTING";

export const MENU_API = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.7272349&lng=83.3021004&restaurantId=354937&catalog_qa=undefined&submitAction=ENTER`;
export const data = [
  {
    cloudinaryImageId: `${CARD_IMG_URL} + 56c9ab92bd79745fd152a30fa2525426.webp`,
    name: "KFC",
    cuisines: "American, German",
    avgRating: "3.4",
  },
  {
    cloudinaryImageId: `${CARD_IMG_URL} + xkb0giahljzc6ewjfhbo.webp`,
    name: "Burger King",
    cuisines: "Indian, American",
    avgRating: "4.0",
  },
  {
    cloudinaryImageId: `${CARD_IMG_URL} + mkmmacm0pxdt61gz0m4y.webp`,
    name: "ShahGhouse",
    cuisines: "Indian, Arabian",
    avgRating: "4.6",
  },
  {
    cloudinaryImageId: `${CARD_IMG_URL} + tto2pcuxusnezxodomzk.webp`,
    name: "Mehfil",
    cuisines: "Indian, Arabian, Lebanese",
    avgRating: "4.4",
  },
];
