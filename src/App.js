import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { TrackerState } from './conetx/TrackerState';
import Result from './components/Result';
import Form from './components/Form';
import Transection from './components/Transection';

function App() {
  return (
    <TrackerState>
      <div className="container">
        <Result />
        <Form />
        <Transection />
      </div>
    </TrackerState>
  );
}

export default App;
