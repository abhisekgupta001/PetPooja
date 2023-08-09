import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/Error/Error";
import RestaurantMenu from "../Components/RestaurantMenu/RestaurantMenu";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Body from "../Components/Body/Body";
import Cart from "../Components/Cart/Cart";
import Layout from "./Layout";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/restaurant/:resID",
        element: <RestaurantMenu />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default appRouter;
