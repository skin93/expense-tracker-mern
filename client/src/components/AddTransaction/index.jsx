import React, { Fragment } from "react";
import { Button, Input, Label } from "./AddTransaction.styled";

const AddTransaction = () => {
  return (
    <Fragment>
      <h3>Add new transaction</h3>
      <form>
        <div>
          <Label htmlFor="text">
            Text <br />
          </Label>
          <Input type="text" placeholder="Enter text..." />
        </div>
        <div>
          <Label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </Label>
          <Input type="number" placeholder="Enter amount..." />
        </div>
        <Button>Add transaction</Button>
      </form>
    </Fragment>
  );
};

export default AddTransaction;
