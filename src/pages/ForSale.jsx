import React,{useState,useContext,useEffect} from 'react'
import { TransactionContext } from '../context/TransactionContext';
import { WeaponCardForSale } from '../components/WeaponCardForSale';
import SideBar from '../components/SideBar'

function ForSale() {
  const [toggle, setToggle] = useState(Date.now());
  const [selectedWeaponType,setSelectedWeaponType] = useState("Cold")
  const {currentAccount,weaponsForSale,handleWeaponIdleTime,getWeaponsForSale} = useContext(TransactionContext)

  const handleSelectedWeaponType = (weapon) => {
    setSelectedWeaponType(weapon);
  }
  useEffect(() => {
   getWeaponsForSale();
  }, [weaponsForSale]);

  useEffect(() => {
    let handle = setTimeout(() => setToggle((prevToggle) => !prevToggle), 5000);
    return () => {
      weaponsForSale.map(weapon => {
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
    <div className="flex md:flex-row flex-col justify-center gradient-bg-welcome">
       <div className="text-white py-12 px-8">
       <SideBar handleChange={handleSelectedWeaponType} selected={selectedWeaponType}/>
      </div>
      {currentAccount ? (<div className="flex flex-wrap justify-center items-center mt-10">
        {weaponsForSale.filter(data => data.weapon_type === selectedWeaponType && data.account_metamask_address !== currentAccount).map((weapon, index) => (
          <WeaponCardForSale
          timestamp={weapon.timestamp}
          key={index}
          id={weapon._id}
          owner={weapon.account_metamask_address}
          weapon={weapon.weapon_name}
          price={weapon.weapon_price}
          url={weapon.weapon_url}
          type={weapon.weapon_type}
          training={weapon.weapon_training}
          />
        ))}
      </div>) : (<div className="flex justify-center items-center flex-col text-white">
              <h1 className="py-12 px-8 font-semibold">
              Login to Metamask to view our weapons.
              </h1>
            </div>)}


            



    </div>
  )
}

export default ForSale