import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import NavBar from "./navbar/Navbar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
