import React, { useContext } from "react";
import trackerContext from "../conetx/trackerContext";
import SingleTrans from "./SingleTrans";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Transection = () => {
  const { transections } = useContext(trackerContext);
  return (
    <div>
      <div className="text-center">
        <h3
          className="d-inline-block py-2"
          style={{
            borderBottom: "1px solid #0e9aa7",
          }}
        >
          Transection History
        </h3>
      </div>
      <TransitionGroup>
        {transections.length !== 0 &&
          transections.map((trans) => (
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
