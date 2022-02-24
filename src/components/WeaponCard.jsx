import React, { useContext, useEffect, useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { Button } from "./Button";
import { TransactionContext } from "../context/TransactionContext";
import { StyledButton } from './StyledButton'
import {VscTriangleDown,VscTriangleUp} from 'react-icons/vsc'

const dictTraining = {
  shooting_range: "Shooting Range",
  basic_training: "Basic Training",
  advanced_training: "Advanced Training",
};


export const WeaponCard = ({
  id,
  price,
  weapon,
  url,
  type,
  training,
  timestamp,
  sale,
  lastModified,
  countTraining,
}) => {
  const [forSale, setForSale] = useState(sale);
  const [toggle, setToggle] = useState(Date.now());


  const {
    currentAccount,
    handleTrainingPrice,
    handleWeaponForSale,
    handleWeaponIdleTime,
  } = useContext(TransactionContext);

  const handleTraining = (index) => {
    const weaponAfterTraining = {
      _id: id,
      timestamp: timestamp,
      weapon_name: weapon,
      weapon_type: type,
      weapon_price: price,
      weapon_url: url,
      weapon_training: training,
      training_index: index,
      last_modified: lastModified,
      count:countTraining,
      account_metamask_address: currentAccount,
    };
    handleTrainingPrice(weaponAfterTraining)
   
  };

  const handleForSale = async () => {
    try {
      setForSale(!forSale);
      const weaponForSale = {
        _id: id,
        timestamp: timestamp,
        weapon_name: weapon,
        weapon_price: price,
        weapon_type: type,
        weapon_training: training,
        weapon_url: url,
        weapon_for_sale: !forSale,
      };
      await handleWeaponForSale(weaponForSale);
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    let handle = setTimeout(() => setToggle((prevToggle) => !prevToggle), 5000);
    return () => {

      handleWeaponIdleTime({
        _id: id,
        last_modified: lastModified,
        weapon_training: training,
        weapon_price: price,
        weapon_type: type,
      })
      clearTimeout(handle)
    };
  }, [toggle]);
  
  return (
    <div className="max-w-sm rounded blue-glassmorphism overflow-hidden shadow-lg m-7 text-white">
      <img
        className="w-full h-48 rounded blue-glassmorphism"
        src={url}
        alt="Sunset in the mountains"
      />

      <div className="px-6 py-4">
        <div className="flex justify-between font-bold text-xl mb-2">
          {weapon}
          <p className="flex">
            {price}
            <FaEthereum className="mt-1 ml-1 text-pink-500" fontSize={20} />
          </p>
          <p className="flex">
            {/* {updatedPrice > lastModifiedPrice ? 
            (
              <span className="flex">
              {`${Number((updatedPrice-lastModifiedPrice)/100).toFixed(5)}%`}
            <VscTriangleUp className="mt-1 ml-1 text-green-500" fontSize={20}/>
            </span>
            )
            :
            (
              <span className="flex">
              {`${Number(Math.abs((lastModifiedPrice-updatedPrice)/100)).toFixed(5)}%`}
              <VscTriangleDown className="mt-1 ml-1 text-red-500" fontSize={20}/>
              </span>
            )
            } */}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-full text-[13px]">
        {/* <span className="font-bold flex mb-1">
            updated:  <p className="px-2 font-semibold">{updatedPrice}</p>
          </span>
          <span className="font-bold flex mb-1">
            current:  <p className="px-2 font-semibold">{lastModifiedPrice}</p>
          </span> */}
          <span className="font-bold flex mb-1">
            Last Modified:  <p className="px-2 font-semibold">{training.idle_time} Hours </p>
          </span>
          { countTraining < 3? 
            
            (<span className="font-bold flex mb-1">
            Training Per Day:  <p className="px-2 font-semibold">{3 - countTraining}</p>
           </span>)
           :
           (<span className="font-bold flex mb-1">
           Training Per Day Limit Reached
          </span>)
           }
          {Object.keys(dictTraining).map((item, index) => (
            <Button
              key={index}
              number={training[item]}
              index={item}
              text={dictTraining[item]}
              onClick={handleTraining}
            />
          ))}
        </div>

      </div>
      <StyledButton
        text={forSale ? "Remove From Sale" : "Sell Weapon"}
        onClick={handleForSale}
      />
    </div>
  );
};
