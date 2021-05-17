import React, { Fragment } from "react";
import Transaction from "../Transaction";
import { List } from "./TransactionList.styled";

const TransactionList = () => {
  return (
    <Fragment>
      <h3>History</h3>
      <List>
        <Transaction />
      </List>
    </Fragment>
  );
};

export default TransactionList;
