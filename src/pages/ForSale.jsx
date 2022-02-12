import React,{useState,useContext,useEffect} from 'react'
import { TransactionContext } from '../context/TransactionContext';
import { weaponsSideBarData } from '../weapons/weaponsNavBarData';
import { WeaponCard } from '../components/WeaponCard';
function ForSale() {
  const {currentAccount,weaponsForSale,getWeaponsForSale} = useContext(TransactionContext)

  const [selectedWeaponType,setSelectedWeaponType] = useState("Cold")
  const handleSelectedWeaponType = (weapon) => {
    setSelectedWeaponType(weapon);
  }
  useEffect(() => {
   getWeaponsForSale();
  }, []);
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
        {weaponsForSale.filter(data => data.weapon_type === selectedWeaponType && data.account_metamask_address !== currentAccount).map((weapon, index) => (
          <WeaponCard
          timestamp={weapon.timestamp}
          key={index}
          id={weapon._id}
          owner={weapon.account_metamask_address}
          weapon={weapon.weapon_name}
          price={weapon.weapon_price}
          url={weapon.weapon_url}
          type={weapon.weapon_type}
          training={weapon.weapon_training}
          tab={"For Sale"}
          />
        ))}
      </div>
    </div>
  )
}

export default ForSale