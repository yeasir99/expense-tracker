import { useState } from 'react';
import { useTracker } from '../conetx/TrackerState';
import { removeTransection } from '../conetx/trackerAction';
import { transectionInfo } from '../types';
import * as React from 'react';

const SingleTrans = (props: { trans: transectionInfo }) => {
  const [, dispatch] = useTracker();
  const [remove, setRemove] = useState(false);
  return (
    <div
      className="d-flex justify-content-between my-2"
      style={
        props.trans.type === 'income'
          ? { borderRight: '2px solid #9bdeac' }
          : { borderRight: '2px solid #c70039' }
      }
      onMouseEnter={() => setRemove(true)}
      onMouseLeave={() => setRemove(false)}
    >
      <h5 className="mx-1">{props.trans.desc}</h5>
      <div className="d-flex">
        <h4 className="mx-1">
          {props.trans.type === 'income' ? <span>+</span> : <span>-</span>}{' '}
          {props.trans.amount}
        </h4>
        <button
          className={`removebtn ${remove ? 'showbutton' : ''}`}
          style={
            props.trans.type === 'income'
              ? { backgroundColor: '#9bdeac' }
              : { backgroundColor: '#c70039' }
          }
          onClick={() => removeTransection(dispatch, props.trans.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default SingleTrans;
