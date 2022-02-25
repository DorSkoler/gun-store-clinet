import React, { useState,useContext, useEffect } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { WeaponCard } from "../components/WeaponCard";
import SideBar from "../components/SideBar";


function Weapons() {
  const [selectedWeaponType, setSelectedWeaponType] = useState("All");
  const { currentAccount,accountWeapons,getAccountWeapons,handleWeaponIdleTime } = useContext(TransactionContext);
  const [toggle, setToggle] = useState(Date.now());
  const handleSelectedWeaponType = (weapon) => {
    setSelectedWeaponType(weapon);
  };

  //use effect to render the page each change in the account weapons
  useEffect(() => {
   getAccountWeapons();
  }, [accountWeapons]);

  useEffect(() => {
    let handle = setTimeout(() => setToggle((prevToggle) => !prevToggle), 5000);
    return () => {
      accountWeapons.map(weapon => {
        handleWeaponIdleTime({
          _id: weapon._id,
          last_modified: weapon.last_modified,
          weapon_training: weapon.weapon_training,
          weapon_price: weapon.weapon_price,
          weapon_type: weapon.weapon_type,
        })
        clearTimeout(handle)
      })
    };
  }, [toggle]);

  return (
    <div className="flex md:flex-row flex-col justify-center">
       <div className="text-white py-12 px-8">
       <SideBar handleChange={handleSelectedWeaponType} selected={selectedWeaponType}/>
      </div>
      {currentAccount ? ( <div className="flex flex-wrap justify-center items-center mt-10">
        {selectedWeaponType === "All" ?
         (accountWeapons.map((weapon,index)=>(
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
          oldPrice={weapon.old_price}
          />
         )))
         :
         (accountWeapons.filter(data => data.weapon_type === selectedWeaponType).map((weapon, index) => (
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
          oldPrice={weapon.old_price}
          />
        )))
         }
      </div>) : (<div className="flex justify-center items-center flex-col text-white">
              <h1 className="py-12 px-8 font-semibold">
              Login to Metamask to view your weapons.
              </h1>
            </div>)}
     
    </div>
  );
}

export default Weapons;
