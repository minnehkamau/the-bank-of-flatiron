import React, { useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {

const [transactionsEvent, setTransactionsEvent] = useState([]);
useEffect(() => { 
  fetch("http://localhost:8001/transactions")
  .then(response => response.json())
  .then((data) => setTransactionsEvent(data));
}, [])

console.log(transactionsEvent);
  return (
    <div>
      <Search />
      <AddTransactionForm />
      <TransactionsList arrayOftransactionEvents = {transactionsEvent}/>
    </div>
  );
}

export default AccountContainer;
