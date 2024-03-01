import React from "react";
import Link from "next/link";
import {
  AiOutlineCreditCard,
  AiOutlineClockCircle,
  AiOutlineInfoCircle,
  AiOutlineAppstore,
} from "react-icons/ai";

const Sidebar = () => {
  return (
    <nav className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:bg-transparent text-white">
      <span className="flex w-40 h-20  rounded-full flex-col m-2 items-start bg-orange-600 text-white gap-5 p-2">
        <Link href={"/"}>
          <div className="text-2xl text-center  font-bold ml-6">Examen</div>
          <div className="text-2xl font-bold text-center p-2 ml-4">Final</div>
        </Link>
      </span>
      <ul className="flex flex-col p-4">
        <li className="flex items-center text-gray-700 text-sm py-2">
          <Link href={"cardgenerator"} className="flex items-center">
            <AiOutlineCreditCard className="mr-2" /> <span>Card Generator</span>
          </Link>
        </li>
        <li className="flex items-center justify-between text-gray-700 text-sm py-2">
          <Link
            href={"digitalclock"}
            className="flex justify-between items-center"
          >
            <AiOutlineClockCircle className="mr-2" /> <span>Digital Clock</span>
          </Link>
        </li>
        <li className="flex items-center text-gray-700 text-sm py-2">
          <Link href={"drilinginfo"} className="flex items-center">
            
            <AiOutlineInfoCircle className="mr-2" /> 
            <span>Drilling Info</span>
          </Link>
        </li>
        <li className="flex items-center text-gray-700 text-sm py-2">
            <Link href={"cardgallery"} className="flex items-center">
            <AiOutlineAppstore className="mr-2" /> <span>Galería de Cartas</span>

        </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;