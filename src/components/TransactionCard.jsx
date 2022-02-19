import React from "react";
import { FaEthereum } from "react-icons/fa";
import { StyledButton } from "../components/StyledButton";

const shortAddress = (address) => {
  return `${address.slice(0, 5)}…${address.slice(address.length - 4)}`;
};

export const TransactionCard = ({
  addressFrom,
  addressTo,
  amount,
  weapon,
  timestamp,
  url,
  type,
}) => {
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
            {amount}
            <FaEthereum className="mt-1 ml-1 text-pink-500" fontSize={20} />
          </p>
        </div>
        <div className="flex flex-col w-full text-md">
          <span className="font-bold flex mb-1">
            Weapon Type: <p className="font-semibold">{type} </p>
          </span>
          <a
            className="font-bold flex mb-1"
            href={`https://ropsten.etherscan.io/address/${addressFrom}`}
            target="_blank"
            rel="noreferrer"
          >
            From: <p className="font-semibold">{shortAddress(addressFrom)} </p>
          </a>
          <a
            className="font-bold flex mb-1"
            href={`https://ropsten.etherscan.io/address/${addressTo}`}
            target="_blank"
            rel="noreferrer"
          >
            To: <p className="font-semibold">{shortAddress(addressTo)}</p>
          </a>
        </div>
      </div>
      <StyledButton text={timestamp}/>
    </div>
  );
};
