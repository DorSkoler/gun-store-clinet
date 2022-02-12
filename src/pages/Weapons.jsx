import React, { useState,useContext, useEffect } from "react";
import { weaponsSideBarData } from "../weapons/weaponsNavBarData";
import { TransactionContext } from "../context/TransactionContext";
import { WeaponCard } from "../components/WeaponCard";
function Weapons() {
  const [selectedWeaponType, setSelectedWeaponType] = useState("Cold");
  const { accountWeapons,getAccountWeapons,handleWeaponIdleTime } = useContext(TransactionContext);
  const handleSelectedWeaponType = (weapon) => {
    setSelectedWeaponType(weapon);
  };

  //use effect to render the page each change in the account weapons
  useEffect(() => {
   getAccountWeapons();
  }, [accountWeapons]);

  return (
    <div className="flex w-full  justify-center gradient-bg-welcome">
      <div className="text-white py-12 px-8">
        <ul>
          {weaponsSideBarData.map((item, key) => {
            return (
              <li
                className="py-5 cursor-pointer"
                key={key}
                onClick={() => handleSelectedWeaponType(item.title)}
              >
                <div>{item.icon}</div>
                <div>{item.title}</div>
              </li>
            );
          })}
        </ul>
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
          />
        ))}
      </div>
    </div>
  );
}

export default Weapons;
