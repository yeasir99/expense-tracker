import React, { useReducer } from "react";
import * as mode from "./actions";
import reducer from "./reducer";
import trackerContext from "./trackerContext";

const TrackerState = ({ children }) => {
  const initialState = {
    transections: [],
    income: 0,
    expense: 0,
    balance: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { transections, income, expense, balance } = state;

  // Add transection

  const addTransection = (detail) =>
    dispatch({ type: mode.ADD_TRANSECTION, payload: detail });

  // Count Balance

  const countBalance = () => {
    let earn = 0;
    let spend = 0;
    transections.forEach((trans) =>
      trans.type === "income"
        ? (earn += Math.abs(trans.amount))
        : (spend += Math.abs(trans.amount))
    );
    let remain = earn - spend;
    const data = { earn, spend, remain };
    dispatch({
      type: mode.COUNT_BALANCE,
      payload: data,
    });
  };

  //remove transection
  const removeTransection = (id) =>
    dispatch({ type: mode.REMOVE_TRANSECTION, payload: id });

  return (
    <trackerContext.Provider
      value={{
        balance,
        income,
        expense,
        transections,
        addTransection,
        countBalance,
        removeTransection,
      }}
    >
      {children}
    </trackerContext.Provider>
  );
};

export default TrackerState;
