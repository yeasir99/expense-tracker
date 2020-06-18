import React, { useContext } from "react";
import trackerContext from "../conetx/trackerContext";
const Result = () => {
  const { balance, income, expense } = useContext(trackerContext);
  return (
    <div>
      <h3>YOUR BALANCE</h3>
      <h1>${balance.toFixed(2)}</h1>
      <div>
        <div>
          <h4>INCOME</h4>
          <h3>${income.toFixed(2)}</h3>
        </div>
        <div>
          <h4>EXPENSE</h4>
          <h3>${expense.toFixed(2)}</h3>
        </div>
      </div>
    </div>
  );
};

export default Result;
