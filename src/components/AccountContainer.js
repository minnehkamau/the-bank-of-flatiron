import React, { useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {

const [transactions, setTransactions] = useState([]);
useEffect(() => { 
  fetch("http://localhost:8001/transactions")
  .then(response => response.json())
  .then((data) => setTransactions(data));
}, [])

console.log(transactions);
  return (
    <div>
      <Search />
      <AddTransactionForm />
      <TransactionsList arrayOftransaction = {transactions}/>
    </div>
  );
}

export default AccountContainer;
