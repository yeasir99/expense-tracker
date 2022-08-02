import * as mode from './types';
import { stateTypes, actionTypes } from '../types';
const trackerReducer = (state: stateTypes, action: actionTypes) => {
  switch (action.type) {
    case mode.ADD_TRANSECTION:
      return {
        ...state,
        transections: [action.payload, ...state.transections],
      };
    case mode.COUNT_BALANCE:
      return {
        ...state,
        income: action.payload.earn,
        expense: action.payload.spend,
        balance: action.payload.remain,
      };
    case mode.REMOVE_TRANSECTION:
      return {
        ...state,
        transections: state.transections.filter(
          trans => trans.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default trackerReducer;
