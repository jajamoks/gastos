import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import CostInput from './components/CostInput';
import CostTable from './components/CostTable';

class App extends Component {
  render() {
    return (
      <Grid className='container'>
        <h3>Gastos</h3>
        <br/>
        <Row>
          <Col lg={9}>
            <CostTable />
          </Col>
          <Col lg={1} />
          <Col lg={2}>
            <CostInput />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
