import React from "react";
import {
  IncExpContainer,
  MoneyMinus,
  MoneyPlus,
} from "./IncomeExpenses.styled.";

const IncomeExpenses = () => {
  return (
    <IncExpContainer>
      <div>
        <h4>Income</h4>
        <MoneyPlus>+$0.00</MoneyPlus>
      </div>
      <div>
        <h4>Expense</h4>
        <MoneyMinus>-$0.00</MoneyMinus>
      </div>
    </IncExpContainer>
  );
};

export default IncomeExpenses;
