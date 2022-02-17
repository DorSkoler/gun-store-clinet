import React, { useContext,useEffect,useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { Button } from "./Button";
import { TransactionContext } from "../context/TransactionContext";
import Loading from "./Loading";
const dictTraining = {
  shooting_range: "Shooting Range",
  basic_training: "Basic Training",
  advanced_training:"Advanced Training"
}

export const WeaponCard = ({ id,price, weapon, url, type, training, timestamp,sale,tab,owner }) => {

  const [forSale,setForSale] = useState(sale)
  const [isLoading,setIsLoading] = useState(false)
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

  const handleForSale = async() => {
    try {
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
        setIsLoading(true)
        await handleWeaponForSale(weaponForSale)
        setIsLoading(false)
    
      } catch (error) {
        console.log(error);
      }
  };

  const handlePurchase= async()=>{
    try {
      const weaponTransaction = {
        _id:id,
        weapon_price:price,
        account_metamask_address:owner,
        weapon_url:url,
        weapon_type:type,
        weapon_name:weapon
      }
      setIsLoading(true)
      await handleNewTransactionFromSale(weaponTransaction)
      setIsLoading(false)
      
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    
  }, [isLoading]); 
   return (
    // <div
    //   className="blue-glassmorphism m-4 flex flex-1
    //   2xl:min-w-[450px]
    //   2xl:max-w-[500px]
    //   sm:min-w-[270px]
    //   sm:max-w-[300px]
    //   min-w-full
    //   flex-col p-3 rounded-md hover:shadow-2xl"
    // >
    //   <div className="flex flex-col items-center w-full mt-3">
    //     <div className="display-flex justify-start w-full mb-2 p-2 text-white text-[16px]">
    //       <p>Type: {type}</p>
    //       <p>Name: {weapon}</p>
    //       <div className="flex flex-row">
    //         <p>Price: {price} ETH </p>
    //         <FaEthereum className="mt-1" />
    //       </div>
    //       <p>Timestamp: <br/> {dateTimestamp}</p>
    //       <p>Training:</p>
    //     </div>
    //     <div className="flex flex-col w-full text-[13px]">
    //       {Object.keys(dictTraining).map(
    //         (item, index) => (
    //             <Button key={index} index={item} text={dictTraining[item]} trainingObject={training} onClick={handleTraining} />
    //         )
    //       )}
    //     </div>
    //     <img
    //       src={url}
    //       alt={"weapon"}
    //       className="w-25 h-50 2xl:h-96 mb-2 rounded-md shadow-lg"
    //     />
    //     {
    //       //if we are on for sale page we render the page diffrently, from sale page we only show the buy option
    //       tab === "For Sale" ? 
    //       (isLoading ? <Loading/> :<Button text={"Buy Weapon"} onClick={handlePurchase} />)
    //       :
    //       //else we are on weapons page and we need the button to be sell or remove
    //       <Button text={forSale ? "Remove From Sale" : "Sell Weapon"} onClick={handleForSale} />
    //     }

    //   </div>
    // </div>

    <div class="rounded-lg shadow-lg bg-white max-w-sm flex-1">
    <a href="#!">
      <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">{weapon}</h5>
      <p class="text-gray-700 text-base mb-4">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
      <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
    </div>
  </div>
  );
};
