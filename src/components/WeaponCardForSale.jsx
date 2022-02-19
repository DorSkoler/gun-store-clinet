import React, { useContext, useEffect, useState } from "react";
import {StyledButton} from './StyledButton'
import { TransactionContext } from "../context/TransactionContext";
import Loading from "./Loading";

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
