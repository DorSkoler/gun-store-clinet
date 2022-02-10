import React,{useState} from 'react';
import { weaponsSideBarData } from '../weapons/weaponsNavBarData';
import weaponsData from '../weapons/weaponsHardCoded'
import { WeaponCardStore } from '../components/WeaponCardStore';

function Store() {
  const [selectedWeaponType,setSelectedWeaponType] = useState("Cold")

  const handleSelectedWeaponType = (weapon) => {
    setSelectedWeaponType(weapon);
  }
  return (<div className="flex w-full  justify-center gradient-bg-welcome">
      <div className="text-white py-12 px-8">
        <ul>
          {weaponsSideBarData.map((item,key)=>{
            return (<li className="py-5 cursor-pointer" key={key} onClick={() => handleSelectedWeaponType(item.title)}>
              <div>{item.icon}</div>
              <div>{item.title}</div>
            </li>)
          })}
        </ul>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-10">
          {weaponsData.filter(data => data.type === selectedWeaponType).map((weapon,index) =>(
            <WeaponCardStore key={index} weapon={weapon.name} price={weapon.price} url={weapon.img} type={weapon.type}/>
          ))}

      </div>

  </div>);
}

export default Store;
