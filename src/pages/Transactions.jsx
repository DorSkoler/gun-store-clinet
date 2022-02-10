import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { TransactionCard } from '../components/TransactionCard'

const Transactions = () => {
  const { currentAccount, accountTransactions } = useContext(TransactionContext);
  return (
    <div className="flex w-full justify-center items-center 2xl:px-20">
      <div className="flex flex-col md:p-12 py-12 px-4">
        <h3 className="text-white text-3xl text-center my-2">Transaction list</h3>


        <div className="flex flex-wrap justify-center items-center mt-10">
          {[...accountTransactions].map((transaction, i) => (
            <TransactionCard
              key={i}
              weapon={transaction.weapon}
              amount={transaction.amount}
              addressFrom={transaction.addressFrom}
              timestamp={transaction.timestamp}
              type={transaction.weaponType}
              url={transaction.weaponUrl}
              addressTo={transaction.addressTo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
