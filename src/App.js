import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import firebase from 'firebase';
import CostInput from './components/CostInput';
import CostTable from './components/CostTable';
import MonthSelector from './components/MonthSelector';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBJPElyq7LJ3ZG5D07aGrmZtLypN_EYSuM",
      authDomain: "gastos-25d0b.firebaseapp.com",
      databaseURL: "https://gastos-25d0b.firebaseio.com",
      storageBucket: "gastos-25d0b.appspot.com",
      messagingSenderId: "276626258741"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Grid>
        <h3><b>Gastos</b></h3>
        <br/>
        <Row>
          <Col lg={8}>
            <CostTable />
          </Col>
          <Col lg={2} className='center'>
            <MonthSelector />
          </Col>
          <Col lg={2}>
            <CostInput />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
