import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
