import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

/**
 * Represents the layout structure of the application.
 * This component ensures a consistent arrangement of header, content outlet, and footer.
 *
 * @component
 * @example
 * Implementation within a parent component:
 * import Layout from './path/to/Layout';
 * ...
 * <Layout />
 */
const Layout = () => {
  return (
    <>
      <Header /> {/* Renders the application header */}
      <Outlet /> {/* Acts as a placeholder for nested route content */}
      <Footer /> {/* Renders the application footer */}
    </>
  );
};

export default Layout;
