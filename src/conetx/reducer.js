import * as mode from "./actions";
export default (state, action) => {
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
          balance: action.payload.remain
      }
      default:
        return state;
  }
};