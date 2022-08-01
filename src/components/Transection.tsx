import { useTracker } from '../conetx/TrackerState';
import SingleTrans from './SingleTrans';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { transectionInfo } from '../types';
import * as React from 'react';

const Transection = (): React.ReactNode => {
  const [{ transections }] = useTracker();
  return (
    <div>
      <div className="text-center">
        <h3
          className="d-inline-block py-2"
          style={{
            borderBottom: '1px solid #0e9aa7',
          }}
        >
          Transection History
        </h3>
      </div>
      <TransitionGroup>
        {transections.length !== 0 &&
          transections.map((transec: transectionInfo) => (
            <CSSTransition key={transec.id} timeout={500} classNames="item">
              <div className="bg-light">
                <SingleTrans trans={transec} />
              </div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </div>
  );
};

export default Transection;
