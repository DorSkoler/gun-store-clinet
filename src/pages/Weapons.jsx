import React, { useState,useContext } from "react";
import { weaponsSideBarData } from "../weapons/weaponsNavBarData";
import { TransactionContext } from "../context/TransactionContext";
import { WeaponCard } from "../components/WeaponCard";
function Weapons() {
  const [selectedWeaponType, setSelectedWeaponType] = useState("");
  const { accountWeapons } = useContext(TransactionContext);
  console.log(accountWeapons);
  const handleSelectedWeaponType = (weapon) => {
    setSelectedWeaponType(weapon);
  };
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
        {accountWeapons.map((weapon, index) => (
          <WeaponCard
            key={index}
            weapon={weapon.weapon_name}
            price={weapon.weapon_price}
            url={weapon.weapon_url}
            type={weapon.weapon_type}
            training={weapon.weapon_traning}
          />
        ))}
      </div>
    </div>
  );
}

export default Weapons;
