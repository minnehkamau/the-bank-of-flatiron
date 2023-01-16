import React, {useState} from "react";

function AddTransactionForm() {
const [formInput, setFormInput] = useState({
  date:"",
  description:"",
  category:"",
  amount:"",
});

function handleSubmit(e) {
  e.preventDefault();

  fetch("http://localhost:8001/transactions",{

  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formInput),
})
  .then(response => response.json())
  .then(data => addedData(data))
  }


  return (
    <div className="ui segment">
      <form onSubmit = {handleSubmit}className="ui form">
        <div className="inline fields">
          <input type="date" name="date" />
          <input type="text" name="description" placeholder="Description" />
          <input type="text" name="category" placeholder="Category" />
          <input type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
