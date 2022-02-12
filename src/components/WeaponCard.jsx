import React, { useContext,useEffect,useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { Button } from "./Button";
import { TransactionContext } from "../context/TransactionContext";

const dictTraining = {
  shooting_range: "Shooting Range",
  basic_training: "Basic Training",
  advanced_training:"Advanced Training"
}

export const WeaponCard = ({ id,price, weapon, url, type, training, timestamp,sale,tab,owner }) => {

  const [forSale,setForSale] = useState(sale)
  const {currentAccount,handleTrainingPrice,handleWeaponIdleTime,handleWeaponForSale,handleNewTransactionFromSale} = useContext(TransactionContext)

  const dateTimestamp = new Date(new Date(timestamp).getTime()).toLocaleString()
  const handleTraining = (index,training,trainingObject) => {
    const weaponAfterTraining = {
      _id:id,
      timestamp:timestamp,
      weapon_name: weapon,
      weapon_type: type,
      weapon_price: price,
      weapon_url: url,
      weapon_training:trainingObject,
      training_index:index,
      account_metamask_address: currentAccount
    }
    handleTrainingPrice(weaponAfterTraining);
    handleWeaponIdleTime(weaponAfterTraining);
  };

  const handleForSale = () => {
    setForSale(!forSale)
    const weaponForSale = {
      _id:id,
      timestamp:timestamp,
      weapon_name: weapon,
      weapon_price: price,
      weapon_type:type,
      weapon_training:training,
      weapon_url:url,
      weapon_for_sale:!forSale
    }
    handleWeaponForSale(weaponForSale)
  
  };

  const handlePurchase=()=>{
    const weaponTransaction = {
      _id:id,
      weapon_price:price,
      account_metamask_address:owner,
      weapon_url:url,
      weapon_type:type,
      weapon_name:weapon
    }

    handleNewTransactionFromSale(weaponTransaction)

  }

 
  return (
    <div
      className="blue-glassmorphism m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full
      flex-col p-3 rounded-md hover:shadow-2xl"
    >
      <div className="flex flex-col items-center w-full mt-3">
        <div className="display-flex justify-start w-full mb-2 p-2 text-white text-[16px]">
          <p>Type: {type}</p>
          <p>Name: {weapon}</p>
          <div className="flex flex-row">
            <p>Price: {price} ETH </p>
            <FaEthereum className="mt-1" />
          </div>
          <p>Timestamp: <br/> {dateTimestamp}</p>
          <p>Training:</p>
        </div>
        <div className="flex flex-col w-full text-[13px]">
          {Object.keys(dictTraining).map(
            (item, index) => (
                <Button key={index} index={item} text={dictTraining[item]} trainingObject={training} onClick={handleTraining} />
            )
          )}
        </div>
        <img
          src={url}
          alt={"weapon"}
          className="w-25 h-50 2xl:h-96 mb-2 rounded-md shadow-lg"
        />
        {
          tab === "For Sale" ? 
          <Button text={"Buy Weapon"} onClick={handlePurchase} /> 
          :
          <Button text={forSale ? "Remove From Sale" : "Sell Weapon"} onClick={handleForSale} />
        }

      </div>
    </div>
  );
};
