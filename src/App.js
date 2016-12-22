import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import CostInput from './components/CostInput';
import CostTable from './components/CostTable';
import MonthSelector from './components/MonthSelector';

class App extends Component {
  render() {
    return (
      <Grid>
        <h3><b>Gastos</b></h3>
        <br/>
        <Row>
          <Col lg={9}>
            <MonthSelector />
          </Col>
        </Row>
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
