import React, { useContext,useState } from "react";
import { TransactionContext } from "../context/TransactionContext";
import Loading from "./Loading";
import StyledButton from "./StyledButton";



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
        
              
    
<div className="max-w-sm rounded blue-glassmorphism overflow-hidden shadow-lg m-7 text-white">
  <img className="w-full h-48 rounded blue-glassmorphism" src={url} alt="Sunset in the mountains"/>

  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{weapon}</div>
    <p className="text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>

  {isLoading ? <Loading/> : <StyledButton text={price} onClick={handleBuy}/>}
       
</div>

  );
};


    