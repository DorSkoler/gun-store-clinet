import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const UserInput = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);
const Home = () => {
  const {connectWallet,currentAccount,userInputData,handleChange,handleNewTransaction} = useContext(TransactionContext)

  //function to be called when the user clicked on the 'send now' button with the user input
  const handleSubmit = (e) => {
    //prevent the default listener function to execute, need to check if there is an input first.
    e.preventDefault()
    if(!userInputData.addressTo || !userInputData.amount || !userInputData.weapon || !userInputData.certification) 
      return
    // calling new transaction function with the input data on the transaction context component.  
    handleNewTransaction();

  };
  
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Buy Weapons <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the Crypto world.<br/> Buy and sell weapons easily with our Gun
            Shop.
          </p>
          {!currentAccount && (
                <button
                type="button"
                onClick={connectWallet}
                className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
                >
                <p className="text-white text-base font-semibold">
                  Connect Wallet
                </p>
              </button>
          )}
        
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <UserInput placeholder="Address To" name="addressTo" handleChange={handleChange}/>
            <UserInput placeholder="Amount" name="amount" type="number" handleChange={handleChange}/>
            <UserInput placeholder="Weapon" name="weapon" type="text" handleChange={handleChange}/>
            <UserInput placeholder="Certification" name="certification" type="text" handleChange={handleChange}/>

            <div className="h-[1px] w-full bg-gray-400 my-2" />
            <button
              type="button"
              onClick={handleSubmit}
              className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
            >
              Send now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
