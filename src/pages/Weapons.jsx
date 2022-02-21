import React, { useState,useContext, useEffect } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { WeaponCard } from "../components/WeaponCard";
import SideBar from "../components/SideBar";


function Weapons() {
  const [selectedWeaponType, setSelectedWeaponType] = useState("Cold");
  const { accountWeapons,getAccountWeapons } = useContext(TransactionContext);
  const handleSelectedWeaponType = (weapon) => {
    setSelectedWeaponType(weapon);
  };

  //use effect to render the page each change in the account weapons
  useEffect(() => {
   getAccountWeapons();
  }, [accountWeapons]);

  return (
    <div className="flex md:flex-row flex-col justify-center">
       <div className="text-white py-12 px-8">
       <SideBar handleChange={handleSelectedWeaponType} selected={selectedWeaponType}/>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-10">
        {accountWeapons.filter(data => data.weapon_type === selectedWeaponType).map((weapon, index) => (
          <WeaponCard
          timestamp={weapon.timestamp}
          key={index}
          id={weapon._id}
          weapon={weapon.weapon_name}
          price={weapon.weapon_price}
          url={weapon.weapon_url}
          type={weapon.weapon_type}
          training={weapon.weapon_training}
          sale={weapon.weapon_for_sale}
          lastModified={weapon.last_modified}
          countTraining={weapon.count_training}
          />
        ))}
      </div>
    </div>
  );
}

export default Weapons;
