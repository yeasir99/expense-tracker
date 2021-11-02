import { useState } from 'react';
import { useTracker } from './../conetx/TrackerState';
import { removeTransection } from './../conetx/trackerAction';

const SingleTrans = ({ trans }) => {
  const [, dispatch] = useTracker();
  const [remove, setRemove] = useState();
  return (
    <div
      className="d-flex justify-content-between my-2"
      style={
        trans.type === 'income'
          ? { borderRight: '2px solid #9bdeac' }
          : { borderRight: '2px solid #c70039' }
      }
      onMouseEnter={() => setRemove(true)}
      onMouseLeave={() => setRemove(false)}
    >
      <h5 className="mx-1">{trans.desc}</h5>
      <div className="d-flex">
        <h4 className="mx-1">
          {trans.type === 'income' ? <span>+</span> : <span>-</span>}{' '}
          {trans.amount}
        </h4>
        <button
          className={`removebtn ${remove ? 'showbutton' : ''}`}
          style={
            trans.type === 'income'
              ? { backgroundColor: '#9bdeac' }
              : { backgroundColor: '#c70039' }
          }
          onClick={() => removeTransection(dispatch, trans.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default SingleTrans;
