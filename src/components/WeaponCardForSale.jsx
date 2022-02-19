import React, { useContext, useEffect, useState } from "react";
import { FaEthereum } from "react-icons/fa";

import { TransactionContext } from "../context/TransactionContext";
import Loading from "./Loading";

const dictTraining = {
  shooting_range: "Shooting Range",
  basic_training: "Basic Training",
  advanced_training: "Advanced Training",
};

const StyledButton = ({ text, onClick }) => {
  return (
    <div className="px-6 pt-4 pb-2 mb-2" onClick={() => onClick()}>
      <div className="grid gap-8 items-start justify-center px-4">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <button className="relative px-3 py-4 bg-black rounded-full leading-none flex items-center divide-x divide-gray-600">
            <span className="flex items-center space-x-5">
              <FaEthereum className="text-pink-500" fontSize={20} />
              <span className="pr-6 text-gray-100">{text}</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export const WeaponCardForSale = ({
  id,
  price,
  weapon,
  url,
  type,
  training,
  owner,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { handleNewTransactionFromSale } =
    useContext(TransactionContext);


  const shortAddress = `${owner.slice(0, 5)}…${owner.slice(owner.length - 4)}`;

  const handlePurchase = async () => {
    try {
      const weaponTransaction = {
        _id: id,
        weapon_price: price,
        account_metamask_address: owner,
        weapon_url: url,
        weapon_type: type,
        weapon_name: weapon,
      };
      setIsLoading(true);
      await handleNewTransactionFromSale(weaponTransaction);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, [isLoading]);
  return (
    <div className="max-w-sm rounded blue-glassmorphism overflow-hidden shadow-lg m-7 text-white">
      <img
        className="w-full h-48 rounded blue-glassmorphism"
        src={url}
        alt="Sunset in the mountains"
      />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{weapon}</div>
        <p className="flex">
          <p className="font-semibold ">From:</p>
          {shortAddress}
        </p>
        <p className="flex">
          <p className="font-semibold ">Shooting Range:</p>
          {training.shooting_range}
        </p>
        <p className="flex">
          <p className="font-semibold">Basic Training:</p>
          {training.basic_training}
        </p>
        <p className="flex">
          <p className="font-semibold">Advanced Training:</p>
          {training.advanced_training}
        </p>
        <p className="flex">
          <p className="font-semibold">Idle Time Passed:</p>
          {training.idle_time} Hours
        </p>
      </div>
      {
        //if we are on for sale page we render the page diffrently, from sale page we only show the buy option
        isLoading ? (
          <Loading />
        ) : (
          <StyledButton text={price} onClick={handlePurchase} />
        )
      }
    </div>
  );
};
