import React, { Fragment, useContext, useEffect } from "react";
import Transaction from "../Transaction";
import { List } from "./TransactionList.styled";
import { GlobalContext } from "../../context/state/GlobalState";

const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <h3>History</h3>
      <List>
        {transactions.map((transaction) => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </List>
    </Fragment>
  );
};

export default TransactionList;
