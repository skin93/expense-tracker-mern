import React, { Fragment, useContext, useState } from "react";
import { GlobalContext } from "../../context/state/GlobalState";
import { Button, Input, Label } from "./AddTransaction.styled";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <Fragment>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="text">
            Text <br />
          </Label>
          <Input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </Label>
          <Input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <Button>Add transaction</Button>
      </form>
    </Fragment>
  );
};

export default AddTransaction;
