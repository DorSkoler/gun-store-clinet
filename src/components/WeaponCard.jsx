import React from "react";
import {FaEthereum} from 'react-icons/fa';

export const WeaponCard = ({price,weapon,url,type,training}) => {

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

          <p className="text-white text-base">Name: {weapon}</p>
          <p className="text-white text-base">Type: {type}</p>
        </div>
        <img
          
          src={url}
          alt={"weapon"}
          className="w-25 h-50 2xl:h-96 rounded-md shadow-lg"
        />
        <div className="flex cursor-pointer bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl" onClick={()=>handleBuy()}>
          <p className="text-left text-[#37c7da] font-bold">{price}<FaEthereum/></p>

        </div>
      </div>
    </div>
  );
};

