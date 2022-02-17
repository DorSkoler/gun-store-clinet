import React, { useContext, useState } from "react";
import weaponsData from "../weapons/weaponsHardCoded";
import { WeaponCardStore } from "../components/WeaponCardStore";
import SideBar from "../components/SideBar";
import { TransactionContext } from "../context/TransactionContext";


function Store() {
  const {currentAccount} = useContext(TransactionContext)
  const [selectedWeaponType, setSelectedWeaponType] = useState("Cold");

  const handleSelectedWeaponType = (weapon) => {
    console.log(weapon);
    setSelectedWeaponType(weapon);
  };
  return (
    <div className="flex md:flex-row flex-col w-full justify-center gradient-bg-welcome">
      
      <div className="text-white py-12 px-8">
       <SideBar handleChange={handleSelectedWeaponType} selected={selectedWeaponType}/>
      </div>
      { currentAccount ? (<div className="flex flex-wrap justify-center items-center mt-10">
        {weaponsData
          .filter((data) => data.type === selectedWeaponType)
          .map((weapon, index) => (
            <WeaponCardStore
              key={index}
              weapon={weapon.name}
              price={weapon.price}
              url={weapon.img}
              type={weapon.type}
            />
          ))}
      </div>) : (<div className="flex justify-center items-center flex-col text-white">
              <h1 className="py-12 px-8 font-semibold">
              Login to Metamask to view our weapons.
              </h1>
            </div>)}

            {/* <div class="flex flex-wrap justify-center items-center mt-10">

              <div class="rounded-lg shadow-lg bg-white max-w-sm flex-1">
                <a href="#!">
                  <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
                </a>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                  <p class="text-gray-700 text-base mb-4">
                    Some quick example text to build on the card title and make up the bulk of the card's
                    content.
                  </p>
                  <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                </div>
              </div>

              <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                  <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
                </a>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                  <p class="text-gray-700 text-base mb-4">
                    Some quick example text to build on the card title and make up the bulk of the card's
                    content.
                  </p>
                  <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                </div>
              </div>

            </div> */}


            
    </div>
  );
}

export default Store;
