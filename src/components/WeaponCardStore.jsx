import React, { useContext,useState } from "react";
import { TransactionContext } from "../context/TransactionContext";
import {FaEthereum} from 'react-icons/fa';
import {Button} from './Button'
import Loading from "./Loading";
export const WeaponCardStore = ({price,weapon,url,type}) => {

  const {handleNewTransaction} = useContext(TransactionContext)
  const [isLoading,setIsLoading] = useState(false)
  //when user chose the weapon he wants to buy this function will create new weapon 'transaction' so the context will handle this.
  const handleBuy = async() => {
    try {
      const userWeapon = {
        weapon:weapon,
        price:price,
        url:url,
        type:type
      }
      // calling new transaction function with the selected weapon transaction. 
      //setting loading animation to be true till transaction will completed.
      setIsLoading(true)
      await handleNewTransaction(userWeapon);
      setIsLoading(false)
  
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <div className="blue-glassmorphism m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full
      flex-col p-3 rounded-md hover:shadow-2xl"
    >
      <div className="flex flex-col items-center w-full mt-1">
        <div className="display-flex justify-start w-full mb-2 p-2">
          {weapon && (
            <>
              <br />
              <p className="text-white text-base">Name: {weapon}</p>
            </>
          )}
          <div className="text-white flex flex-row">
          <p className="text-white text-base">Price: {price} ETH </p>
            <FaEthereum className="mt-1"/>
          </div>
          {/* <p className="text-white text-base">Price: {price} ETH </p> */}
        </div>
        <img
          
          src={url}
          alt={"weapon"}
          className="w-25 h-50 2xl:h-96 mb-2 rounded-md shadow-lg"
        />
        {isLoading
              ? <Loading />
              : (
                <Button text={"Buy"} onClick={handleBuy}/>

              )}
      </div>
    </div>
  );
};

