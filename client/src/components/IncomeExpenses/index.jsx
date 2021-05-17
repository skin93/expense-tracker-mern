import React, { useContext } from "react";
import { GlobalContext } from "../../context/state/GlobalState";
import {
  IncExpContainer,
  MoneyMinus,
  MoneyPlus,
} from "./IncomeExpenses.styled.";
import { numberWithCommas } from "../../utils/format";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return (
    <IncExpContainer>
      <div>
        <h4>Income</h4>
        <MoneyPlus>+${numberWithCommas(income)}</MoneyPlus>
      </div>
      <div>
        <h4>Expense</h4>
        <MoneyMinus>-${numberWithCommas(expense)}</MoneyMinus>
      </div>
    </IncExpContainer>
  );
};

export default IncomeExpenses;
