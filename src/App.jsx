import { Outlet, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Error from "./Components/Error/Error";
import About from "./Components/About/About";
import Cart from "./Components/Cart/Cart";
import RestaurantMenu from "./Components/RestaurantMenu/RestaurantMenu";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import { useState } from "react";
import UserContext from "./utils/UserContext";

function App() {
  const [user, setUser] = useState({
    name: "Abhisek Gupta",
    email: "gabhise@amazon.com",
  });

  return (
    <UserContext.Provider value={{ user: user }}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default App;
