import React, { useContext, useState } from "react";
import weaponsData from "../weapons/weaponsHardCoded";
import { WeaponCardStore } from "../components/WeaponCardStore";
import SideBar from "../components/SideBar";
import { TransactionContext } from "../context/TransactionContext";


function Store() {
  const {currentAccount} = useContext(TransactionContext)
  const [selectedWeaponType, setSelectedWeaponType] = useState("Cold");

  const handleSelectedWeaponType = (weapon) => {
    setSelectedWeaponType(weapon);
  };
  return (
    <div className="flex md:flex-row flex-col w-full justify-center gradient-bg-welcome">
      
      <div className="text-white py-12 px-8">
       <SideBar handleChange={handleSelectedWeaponType} selected={selectedWeaponType}/>
      </div>
      { currentAccount ? 
      (<div className="flex flex-wrap justify-center items-center mt-10">
        {weaponsData
          .filter((data) => data.type === selectedWeaponType)
          .map((weapon) => (
            <WeaponCardStore
              key={weapon.id}
              weapon={weapon.name}
              price={weapon.price}
              url={weapon.img}
              type={weapon.type}
            />
          ))}
       </div>) 
      :
       (<div className="flex justify-center items-center flex-col text-white">
              <h1 className="py-12 px-8 font-semibold">
              Login to Metamask to view our weapons.
              </h1>
            </div>)}
    </div>
  );
}

export default Store;
