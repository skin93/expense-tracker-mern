import React from "react";
import { DeleteButton, ListItem } from "./Transaction.styled";

const Transaction = () => {
  return (
    <ListItem>
      Cash <span>-$400</span>
      <DeleteButton>x</DeleteButton>
    </ListItem>
  );
};

export default Transaction;
