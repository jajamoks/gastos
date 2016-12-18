import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import CostInput from './components/CostInput';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h3>Gastos</h3>
        <CostInput />
        <hr/>
      </div>
    );
  }
}

export default App;
