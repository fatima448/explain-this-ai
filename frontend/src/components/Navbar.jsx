import React from "react";
import logo from "../assets/logo.png";
import { IoMoon } from "react-icons/io5";
import { LuBrainCircuit } from "react-icons/lu";

const Navbar = () => {
  return (
    <>
      <div className="nav flex items-center justify-between px-[120px] h-[70px]">
        <div className="logo flex items-center ">
          <img src={logo} alt="Logo" className="h-[70px]" />
          <h3 className="text-[30px] font-bold tracking-tight ">
            ExplainThis<span className="bg-gradient-to-bl from-transparent via-cyan-500 to-blue-800 bg-clip-text text-transparent"> AI</span>
          </h3>
        </div>
        <div className="icons flex items-center gap-[15px]">
          <i className="icon"><IoMoon /></i>
          <i className="icon"><LuBrainCircuit /></i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
