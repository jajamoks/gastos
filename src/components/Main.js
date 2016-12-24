import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import CostInput from './CostInput';
import CostTable from './CostTable';
import MonthSelector from './MonthSelector';

class Main extends Component {
  render() {
    return (
      <Grid>
        <h3><b>Gastos</b></h3>
        <br/>
        <Row>
          <Col lg={2} className='center'>
            <MonthSelector />
          </Col>
          <Col lg={8}>
            <CostTable />
          </Col>
          <Col lg={2}>
            <CostInput />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Main;