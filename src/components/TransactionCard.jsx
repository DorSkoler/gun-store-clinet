import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const shortAddress = (address) => {
  return `${address.slice(0, 5)}…${address.slice(address.length - 4)}`
}

export const TransactionCard = ({addressFrom,addressTo,amount,weapon,timestamp,url,type}) => {

  const {handleNewTransaction} = useContext(TransactionContext)

  const handleBuy = (w) => {
    //prevent the default listener function to execute, need to check if there is an input first.
    console.log(w);
    // calling new transaction function with the input data on the transaction context component.  
    handleNewTransaction(true);
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
      <div className="flex flex-col items-center w-full mt-3">
        <div className="display-flex justify-start w-full mb-6 p-2">
          <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
            <p className="text-white text-base">From: {shortAddress(addressFrom)}</p>
          </a>
          <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
            <p className="text-white text-base">To: {shortAddress(addressTo)}</p>
          </a>
          {weapon && (
            <>
              <br />
              <p className="text-white text-base">Weapon Type: {type}</p>
              <p className="text-white text-base">Weapon Name: {weapon}</p>

            </>
          )}
          <p className="text-white text-base">Price: {amount} ETH</p>
        </div>
        <img
          
          src={url}
          alt={"weapon"}
          className="w-25 h-50 2xl:h-96 rounded-md shadow-lg"
        />
        <div className="cursor-pointer bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl" onClick={()=>{}}>
          <p className="text-[#37c7da] font-bold">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

