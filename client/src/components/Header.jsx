import React, { useState } from "react";
import Logo from "./../assets/logo.png";
import { FaBars } from "react-icons/fa";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="w-full bg-[#0E416D]">
      <div className="flex justify-between items-center px-4 py-2">
        <div>
          <img src={Logo} className="w-32 sm:w-48" />
        </div>
        <ul className="hidden sm:flex gap-4 text-white">
          <li>Home</li>
          <li>About</li>
          <li>Quiz</li>
          <li>Assessment</li>
          <li>Driving License</li>
        </ul>
        <div className=" sm:hidden">
          <FaBars className="text-white text-xl" onClick={()=>setMenuOpen(!menuOpen)} />
          {menuOpen && <div>
            <ul className="absolute bg-slate-200 px-4 py-2 top-12 right-0 flex flex-col gap-2">
              <li>Home</li>
              <li>About</li>
              <li>Quiz</li>
              <li className="text-nowrap">Assessment</li>
              <li className="text-nowrap">Driving License</li>
            </ul>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Header;
