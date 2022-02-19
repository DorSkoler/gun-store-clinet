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
    // <div className="blue-glassmorphism m-4 flex flex-1
    //   2xl:min-w-[450px]
    //   2xl:max-w-[500px]
    //   sm:min-w-[270px]
    //   sm:max-w-[300px]
    //   min-w-full
    //   flex-col p-3 rounded-md hover:shadow-2xl"
    // >
    //   <div className="flex flex-col items-center w-full mt-3">
    //     <div className="display-flex justify-start w-full mb-6 p-2">
    //       <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
    //         <p className="text-white text-base">From: {shortAddress(addressFrom)}</p>
    //       </a>
    //       <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
    //         <p className="text-white text-base">To: {shortAddress(addressTo)}</p>
    //       </a>
    //       {weapon && (
    //         <>
    //           <br />
    //           <p className="text-white text-base">Weapon Type: {type}</p>
    //           <p className="text-white text-base">Weapon Name: {weapon}</p>

    //         </>
    //       )}
    //       <p className="text-white text-base">Price: {amount} ETH</p>
    //     </div>
    //     <img

    //       src={url}
    //       alt={"weapon"}
    //       className="w-25 h-50 2xl:h-96 rounded-md shadow-lg"
    //     />
    //     <div className="cursor-pointer bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl" onClick={()=>{}}>
    //       <p className="text-[#37c7da] font-bold">{timestamp}</p>
    //     </div>
    //   </div>
    // </div>

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
        <div className="flex flex-col justify-center items-center w-full text-[13px]">
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
          {/* {Object.keys(dictTraining).map((item, index) => (
            <Button
              key={index}
              number={training[item]}
              index={item}
              text={dictTraining[item]}
              trainingObject={training}
              onClick={handleTraining}
            />
          ))} */}
        </div>
      </div>
      <StyledButton text={timestamp}/>
    </div>
  );
};
