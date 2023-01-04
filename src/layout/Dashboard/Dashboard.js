import { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="grid grid-cols-12 p-3 gap-3 ">
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-80"
        } lg:hidden col-span-4 bg-technicableSecondary text-technicableWhite h-[calc(100vh-25px)] p-5 rounded-lg transition-all duration-500 absolute top-2 left-2 z-10`}
      >
        <div className="">
          <Sidebar toggleSidebar={toggleSidebar} />
        </div>
      </div>

      <div className="lg:hidden col-span-2">
        <HiBars3BottomRight
          onClick={() => toggleSidebar()}
          className="text-4xl text-technicableSecondary block lg:hidden"
        />
      </div>
      <div className="col-span-2 hidden lg:block">
        <Sidebar toggleSidebar={toggleSidebar} />
      </div>
      <div className="col-span-10 w-full bg-gray-100 rounded-lg p-3">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
