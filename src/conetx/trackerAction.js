import * as mode from './types';
// Add transection

export const addTransection = (dispatch, detail) =>
  dispatch({ type: mode.ADD_TRANSECTION, payload: detail });

// Count Balance

export const countBalance = (dispatch, transections) => {
  let earn = 0;
  let spend = 0;
  transections.forEach(trans =>
    trans.type === 'income'
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
export const removeTransection = (dispatch, id) =>
  dispatch({ type: mode.REMOVE_TRANSECTION, payload: id });
