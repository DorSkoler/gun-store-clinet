import React, { useContext,useState } from "react";
import { TransactionContext } from "../context/TransactionContext";
import {FaEthereum} from 'react-icons/fa';



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
  <div className="px-6 pt-4 pb-2 mb-2">
    {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    */}
   <div class="grid gap-8 items-start justify-center px-4">
            <div class="relative group">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <button class="relative px-7 py-4 bg-black rounded-full leading-none flex items-center divide-x divide-gray-600">
                <span class="flex items-center space-x-5">
                  <FaEthereum className="text-pink-500" fontSize={20}/>
                  <span class="pr-6 text-gray-100">{price}</span>
                </span>
              </button>
            </div>
          </div>

  </div>
       
</div>

  );
};


    {/* // <div className="blue-glassmorphism m-4 flex flex-1
    //   2xl:min-w-[450px]
    //   2xl:max-w-[500px]
    //   sm:min-w-[270px]
    //   sm:max-w-[300px]
    //   min-w-full
    //   flex-col p-3 rounded-md hover:shadow-2xl"
    // >
    //   <div className="flex flex-col items-center w-full mt-1">
    //     <div className="display-flex justify-start w-full mb-2 p-2">
    //       {weapon && (
    //         <>
    //           <br />
    //           <p className="text-white text-base">Name: {weapon}</p>
    //         </>
    //       )}
    //       <div className="text-white flex flex-row">
    //       <p className="text-white text-base">Price: {price} ETH </p>
    //         <FaEthereum className="mt-1"/>
    //       </div>
    //       {/* <p className="text-white text-base">Price: {price} ETH </p> */}
    {/* //     </div> */}
    {/* //     <img */}
{/*           
    //       src={url}
    //       alt={"weapon"}
    //       className="w-25 h-50 2xl:h-96 mb-2 rounded-md shadow-lg"
    //     />
    //     {isLoading
    //           ? <Loading />
    //           : (
    //             <Button text={"Buy"} onClick={handleBuy}/>

    //           )}
    //   </div>
    // </div> */} 