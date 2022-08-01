import { useTracker } from '../conetx/TrackerState';
import SingleTrans from './SingleTrans';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { transectionInfo } from '../types';

const Transection = () => {
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
          transections.map((trans: transectionInfo) => (
            <CSSTransition key={trans.id} timeout={500} classNames="item">
              <div className="bg-light">
                <SingleTrans trans={trans} />
              </div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </div>
  );
};

export default Transection;
