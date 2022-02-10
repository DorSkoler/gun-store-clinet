import React, { useContext } from "react";
import { FaEthereum } from "react-icons/fa";
import { Button } from "./Button";
import { TransactionContext } from "../context/TransactionContext";

const dictTraining = {
  shooting_range: "Shooting Range",
  basic_training: "Basic Training",
  advanced_training:"Advanced Training"
}

export const WeaponCard = ({ id,price, weapon, url, type, training }) => {

  const {currentAccount,handleTrainingPrice} = useContext(TransactionContext)

  const handleTraining = (index,training,trainingObject) => {
    const weaponAfterTraining = {
      _id:id,
      weapon_name: weapon,
      weapon_type: type,
      weapon_price: price,
      weapon_url: url,
      weapon_training:trainingObject,
      training_index:index,
      account_metamask_address: currentAccount
    }
    console.log(weaponAfterTraining);
    handleTrainingPrice(weaponAfterTraining);

  };

  const handleSend = () => {
    console.log("test send");
  };

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
        <Button text={"Send"} onClick={handleSend} />
      </div>
    </div>
  );
};
