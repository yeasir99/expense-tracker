import { useTracker } from './../conetx/TrackerState';
const Result = () => {
  const [{ balance, income, expense }] = useTracker();
  return (
    <div className="my-2">
      <h3>YOUR BALANCE</h3>
      <h1>${balance.toFixed(2)}</h1>
      <div className="row">
        <div className="col-sm-6 mb-1">
          <div className="card">
            <div className="card-body">
              <h4>INCOME</h4>
              <h3>${income.toFixed(2)}</h3>
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h4>EXPENSE</h4>
              <h3>${expense.toFixed(2)}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
