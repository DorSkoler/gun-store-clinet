import React, { useState } from "react";
import weaponsData from "../weapons/weaponsHardCoded";
import { WeaponCardStore } from "../components/WeaponCardStore";
import SideBar from "../components/SideBar";


function Store() {
  const [selectedWeaponType, setSelectedWeaponType] = useState("Light");

  const handleSelectedWeaponType = (weapon) => {
    console.log(weapon);
    setSelectedWeaponType(weapon);
  };
  return (
    <div className="flex md:flex-row flex-col w-full justify-center gradient-bg-welcome">
      <div className="text-white py-12 px-8">
       <SideBar handleChange={handleSelectedWeaponType} selected={selectedWeaponType}/>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-10">
        {weaponsData
          .filter((data) => data.type === selectedWeaponType)
          .map((weapon, index) => (
            <WeaponCardStore
              key={index}
              weapon={weapon.name}
              price={weapon.price}
              url={weapon.img}
              type={weapon.type}
            />
          ))}
      </div>
    </div>
  );
}

export default Store;
