import React from "react";
import Transaction from "./Transaction";

function TransactionsList({arrayOftransaction}) {
const singleTransaction = arrayOftransaction.map((transaction) => {
  <Transaction 
  key={transaction.id}
  data={transaction.data}
  description={transaction.description}
  category={transaction.category}
  amount={transaction.amount}
  date={transaction.date}
  deleteTransaction={handleDelete}
  />
});


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
        {/* render a list of <Transaction> components here */}
      </tbody>
    </table>
  );
}

export default TransactionsList;
