export type transectionInfo = {
  amount: string;
  desc: string;
  id: string;
  type: string;
};

export type stateTypes = {
  transections: transectionInfo[];
  income: number;
  expense: number;
  balance: number;
};

export type transCountInfo = {
  earn: number;
  spend: number;
  remain: number;
};

enum ActionTypes {
  ADD_TRANSECTION = 'ADD_TRANSECTION',
  COUNT_BALANCE = 'COUNT_BALANCE',
  REMOVE_TRANSECTION = 'REMOVE_TRANSECTION',
}

export type actionTypes =
  | {
      type: ActionTypes.ADD_TRANSECTION;
      payload: transectionInfo;
    }
  | {
      type: ActionTypes.COUNT_BALANCE;
      payload: transCountInfo;
    }
  | {
      type: ActionTypes.REMOVE_TRANSECTION;
      payload: string;
    };
