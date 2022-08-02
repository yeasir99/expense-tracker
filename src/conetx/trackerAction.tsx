import * as React from 'react';
import * as mode from './types';
import { transectionInfo, transCountInfo } from '../types';
// Add transection

export const addTransection = (
  dispatch: React.Dispatch<{ type: string; payload: transectionInfo }>,
  detail: transectionInfo
) => dispatch({ type: mode.ADD_TRANSECTION, payload: detail });

// Count Balance

export const countBalance = (
  dispatch: React.Dispatch<{
    type: string;
    payload: transCountInfo;
  }>,
  transections: transectionInfo[]
) => {
  let earn = 0;
  let spend = 0;
  transections.forEach(trans =>
    trans.type === 'income'
      ? (earn += Math.abs(Number(trans.amount)))
      : (spend += Math.abs(Number(trans.amount)))
  );
  let remain = earn - spend;
  const data = { earn, spend, remain };
  dispatch({
    type: mode.COUNT_BALANCE,
    payload: data,
  });
};

//remove transection
export const removeTransection = (
  dispatch: React.Dispatch<{ type: string; payload: string }>,
  id: string
) => dispatch({ type: mode.REMOVE_TRANSECTION, payload: id });
