import React ,{useState}from "react";
import { weaponsSideBarData } from "../weapons/weaponsNavBarData";

const styleButton = `flex items-center h-12 px-7 mt-5 rounded-full transition-all duration-300 hover:bg-[#2952e3] cursor-pointer`;

const SideBar = ({ handleChange, selected }) => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="flex md:flex-col flex-row items-center w-full md:w-60 text-white bg-transparent rounded">
      <div className="flex w-1/5 md:w-full ">
        <a className="flex items-center md:w-full text-center px-3 mt-3">
          <span className="ml-2 text-xl font-semibold">Weapon Type</span>
        </a>
      </div>

      <div className="w-4/5 md:w-full flex flex-row md:flex-col flex-wrap">
        {weaponsSideBarData.map((item,index)=>(
            <a
            key={index}
            onClick={() => handleChange(item.title)}
            className={`${selected === item.title && "bg-[#2952e3]"} ${styleButton}`}
          >
            <item.icon fontSize={28} />
            <span className="ml-2 text-md font-medium">{item.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
