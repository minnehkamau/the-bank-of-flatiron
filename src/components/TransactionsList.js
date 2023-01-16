import React, {useState} from "react";
import Transaction from "./Transaction";

function TransactionsList({arrayOftransactionEvents, transactionEventSetter, searchName}) {

let transactionEventList ;
const [sortMethod] = useState({
  category: -1,
  description: -1
})

//sort strategy
function updateSortMethod(item){
  sortMethod[item] = sortMethod[item] * -1;
}
if (transactionEvents) {


  const filteredTransactions = transactionEvents.filter(transactionEvents=>{
    return (transactionEvents.description.toLowerCase().includes(searchName.toLowerCase())||
    transactionEvents.category.toLowerCase().includes(searchName.toLowerCase()))
  })
}
transactionEventList = filteredTransactions.map((transaction) => (
  <Transaction 
  key={transaction.id}
  date={transaction.date}
  description={transaction.description}
  category={transaction.category}
  amount={transaction.amount}
  />
));


function sortTransactions(e){

  const sortBy = e.target.textContent.toLowerCase();
  updateSortMethod(sortBy);


  let copyOftransactionEvents;

  if (sortBy === 'description' || sortBy === 'category') {
    copyOftransactionEvents = [...arrayOftransactionEvents].sort((a,b)=>{
      if (a[sortBy].toLowerCase() > b[sortBy].toLowerCase()){
              return sortMethod[sortBy] 
            }else if
              (a[sortBy].toLowerCase() < b[sortBy].toLowerCase()){
                return sortMethod[sortBy]                                       
            }else{
              return 0
            }
    })

}
transactionEventSetter(copyOftransactionEvents)
}
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header" onClick={sortTransactions}>Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header"onClick={sortTransactions}>Category</h3>
          </th>
          <th> 
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {transactionEventList}
      </tbody>
    </table>
  );
}

export default TransactionsList;
