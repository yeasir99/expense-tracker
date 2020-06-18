import React, { useContext } from "react";
import trackerContext from "../conetx/trackerContext";

const Transection = () => {
  const { transections } = useContext(trackerContext);
  //amount, desc, type
  return (
    <div>
      <h3>Transection History</h3>
      {transections.map((trans) => (
        <div key={trans.id}>
          <div>
            <h5>{trans.desc}</h5>
            <h4>
              {trans.type === "income" ? <span>+</span> : <span>-</span>}
              {trans.amount}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Transection;
