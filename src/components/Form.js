import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import { useTracker } from './../conetx/TrackerState';
import 'react-toastify/dist/ReactToastify.css';
import { addTransection, countBalance } from './../conetx/trackerAction';

const Form = () => {
  const [inc, setInc] = useState('');
  const [exp, setExp] = useState('');
  const [desc, setDesc] = useState('');
  const [{ transections, balance }, dispatch] = useTracker();

  // handle form submit

  const handleSubmit = e => {
    e.preventDefault();
    const id = uuidv4();
    if (inc && desc) {
      addTransection(dispatch, { id, type: 'income', amount: inc, desc });
      setInc('');
      setDesc('');
    } else if (exp && desc && balance >= exp) {
      addTransection(dispatch, { id, type: 'expense', amount: exp, desc });
      setExp('');
      setDesc('');
    } else if (!inc && !exp && !desc) {
      toast.error('Please add Income or Expense and Description');
    } else if (balance < exp)
      toast.error("You don't Have enough money to spend");
  };

  // Update Balance

  useEffect(() => {
    countBalance(dispatch, transections);
    // eslint-disable-next-line
  }, [transections]);

  return (
    <form onSubmit={handleSubmit}>
      <ToastContainer autoClose={2000} />
      <h4>Add Your Income or Expense</h4>
      <div className="row g-2">
        <div className="col-auto">
          <label htmlFor="income" className="d-block">
            Income
          </label>
          <input
            type="number"
            name="income"
            id="income"
            value={inc}
            onChange={e => setInc(e.target.value)}
            disabled={exp}
          />
        </div>
        <div className="col-auto">
          <label htmlFor="expense" className="d-block">
            Expense
          </label>
          <input
            type="number"
            name="expense"
            id="expense"
            value={exp}
            onChange={e => setExp(e.target.value)}
            disabled={inc}
          />
        </div>
      </div>
      <div>
        <label htmlFor="description" className="d-block">
          Description
        </label>
        <input
          type="text"
          name="description"
          id="description"
          value={desc}
          onChange={e => setDesc(e.target.value)}
        />
      </div>
      <input type="submit" className="btn btn-primary mt-1" />
    </form>
  );
};

export default Form;
