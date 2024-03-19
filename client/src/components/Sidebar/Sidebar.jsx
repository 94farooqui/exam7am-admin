import React from "react";
import Logo from "./../../assets/logo.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sticky top-0 left-0 h-screen w-64 bg-gray-900 text-white flex flex-col">
      <div className="p-4">
        <div>
          <img src={Logo} className="w-32 sm:w-48" />
        </div>
        {/* Add your sidebar content here */}
      </div>
      <ul className="p-4 flex flex-col gap-4 ">
        <li><Link to='/'>Dashboard</Link></li>
        <li><Link to='/assessment'>Technical Assessment</Link></li>
        <li><Link to='/school'>School Programs</Link></li>
        <li><Link to='/driving'>Driving Thoery</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
