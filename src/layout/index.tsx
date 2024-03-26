import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="w-sceen h-sceen flex flex-col justify-between">
        <Navbar />    
        <Outlet />
        <Footer />
    </div>
  );
};

export default Layout;