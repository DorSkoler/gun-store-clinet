import React, { useContext, useState } from "react";
import logo from "/images/logo.png";
import { TransactionContext } from "../context/TransactionContext";
import { Link } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { currentAccount, connectWallet } = useContext(TransactionContext);
  const shortAddress = `${currentAccount.slice(0, 5)}…${currentAccount.slice(
    currentAccount.length - 4
  )}`;

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="w-32 cursor-pointer" />
        </Link>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Transactions", "Weapons", "For Sale", "Store"].map((item, index) => (
          <Link to={`/${item.split(" ").join("")}`} key={index}>
            <li className="mx-4 cursor-pointer">{item}</li>
          </Link>
        ))}
        <li
          className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full transition-all duration-300 cursor-pointer hover:bg-[#2546bd]"
          onClick={connectWallet}
        >
          {currentAccount ? shortAddress : "Login"}
        </li>
      </ul>

    
      <div className="flex relative transition-all duration-150">
        {/* for mobile use, toggle menu will show the menu of mobile view */}
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
          flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in
          "
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Transactions", "Weapons", "For Sale", "Store"].map(
              (item, index) => (
                <Link to={`/${item.split(" ").join("")}`} key={index}>
                  <li
                    className="mx-4 cursor-pointer text-lg my-2"
                    onClick={() => setToggleMenu(false)}
                  >
                    {item}
                  </li>
                </Link>
              )
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
