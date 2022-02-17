import React from "react";
import { weaponsSideBarData } from "../weapons/weaponsNavBarData";

const styleButton = `flex items-center h-12 px-7 mt-5 md:rounded-full transition-all duration-300 hover:bg-gradient-to-r from-pink-600 to-purple-600 cursor-pointer`;
const SideBar = ({ handleChange, selected }) => {


  return (
    <div className="flex md:flex-col flex-row items-center w-full md:w-60 text-white bg-transparent rounded">
      <div className="flex w-1/5 md:w-full">
        <a className="flex items-center md:w-full text-center px-3 mt-3">
          <span className="ml-2 text-xl font-semibold">Weapon Type</span>
        </a>
        {/* button for mobile view */}
        <button id="dropdownButton" data-dropdown-toggle="dropdown" className="md:hidden flex items-center font-semibold h-12 px-7 mt-5 rounded-full hover:hover:bg-gradient-to-r from-pink-600 to-purple-600 transition-all duration-300" type="button">{selected} <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
      </div>

      <div className="w-4/5 md:w-full md:flex flex-col hidden flex-wrap">
        {weaponsSideBarData.map((item,index)=>(
            <a
            key={index}
            onClick={() => handleChange(item.title)}
            className={`${selected === item.title && "bg-gradient-to-r from-pink-600 to-purple-600"} ${styleButton}`}
          >
            <item.icon fontSize={28} />
            <span className="ml-2 text-md font-medium">{item.title}</span>
          </a>
        ))}
      </div>
    

        {/* <!-- Dropdown menu for mobile--> */}
        <div id="dropdown" className="hidden z-10 w-44 rounded divide-y divide-gray-100 shadow animate blue-glassmorphism">
          
            <ul className="py-1 transition-all duration-300" aria-labelledby="dropdownButton">
                {weaponsSideBarData.map((item,index)=>(
                <a
                key={index}
                onClick={() => handleChange(item.title)}
                className={`${selected === item.title && "bg-gradient-to-r from-pink-600 to-purple-600"} ${styleButton}`}
                >
                <item.icon fontSize={28} />
                <span className="ml-2 text-md font-medium">{item.title}</span>
                </a>
                 ))}
        
            </ul>
        </div>
    </div>
  );
};

export default SideBar;
