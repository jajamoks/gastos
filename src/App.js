import React, { Component } from 'react';
import CostInput from './components/CostInput';
import CostTable from './components/CostTable';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h3>Gastos</h3>
        <CostInput />
        <hr/>
        <CostTable />
      </div>
    );
  }
}

export default App;
