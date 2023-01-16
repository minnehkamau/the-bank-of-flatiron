import React, { useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {

const [transaction, setTransaction] = useState([]);
useEffect(() => { 
  fetch("http://localhost:8001/transactions")
  .then(response => response.json())
  .then((data) => console.log(data));
}), []


  return (
    <div>
      <Search />
      <AddTransactionForm />
      <TransactionsList />
    </div>
  );
}

export default AccountContainer;
