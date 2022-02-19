import React, { useContext, useEffect, useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { Button } from "./Button";
import { TransactionContext } from "../context/TransactionContext";
import { StyledButton } from './StyledButton'


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
}) => {
  const [forSale, setForSale] = useState(sale);
  const [toggle, setToggle] = useState(Date.now());
  const [countTraining, setCountTraining] = useState(localStorage.getItem('countTraining'));
  const {
    currentAccount,
    handleTrainingPrice,
    handleWeaponForSale,
    handleWeaponIdleTime,
  } = useContext(TransactionContext);

  const dateTimestamp = new Date(
    new Date(timestamp).getTime()
  ).toLocaleString();

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
    handleTrainingPrice(weaponAfterTraining);
    setCountTraining(countTraining+1);
    window.localStorage.setItem('countTraining', countTraining+1)
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
      setIsLoading(true);
      await handleWeaponForSale(weaponForSale);
      setIsLoading(false);
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
        </div>
        <div className="flex flex-col justify-center items-center w-full text-[13px]">
          <span className="font-bold flex mb-1">
            Last Modified:  <p className="px-2 font-semibold">{training.idle_time} Hours </p>
          </span>
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
