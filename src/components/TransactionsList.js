import React from "react";
import Transaction from "./Transaction";

function TransactionsList({arrayOftransactionEvents}) {

let transactionEventList = "loading..."
if (arrayOftransactionEvents) {
}

// const singleTransaction = arrayOftransactionEvents.map((transaction) => (
//   <Transaction 
//   key={transaction.id}
//   date={transaction.date}
//   description={transaction.description}
//   category={transaction.category}
//   amount={transaction.amount}
//   />
// ));


  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {singleTransaction}
      </tbody>
    </table>
  );
}

export default TransactionsList;
