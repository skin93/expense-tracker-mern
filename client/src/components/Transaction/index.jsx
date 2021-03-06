import React, { useContext } from "react";
import { DeleteButton, ListItem } from "./Transaction.styled";
import { GlobalContext } from "../../context/state/GlobalState";
import { numberWithCommas } from "../../utils/format";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <ListItem amount={transaction.amount}>
      {transaction.text}
      <span>
        {sign}${numberWithCommas(Math.abs(transaction.amount))}
      </span>
      <DeleteButton onClick={() => deleteTransaction(transaction._id)}>
        x
      </DeleteButton>
    </ListItem>
  );
};

export default Transaction;
