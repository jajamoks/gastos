import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { emailChanged, passwordChanged } from '../actions'

class Login extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col lg={4} sm={3} />
          <Col lg={4} sm={6} >
            <h3>Gastos App</h3>
            <br/>
            <br/>
            <form>
              <FormGroup>
                <ControlLabel>
                  Email
                </ControlLabel>
                <FormControl
                  type='text'
                  value={this.props.email}
                  onChange={(e) => {this.props.emailChanged(e.target.value)}}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>
                  Clave
                </ControlLabel>
                <FormControl
                  type='password'
                  value={this.props.password}
                  onChange={(e) => {this.props.passwordChanged(e.target.value)}}
                />
              </FormGroup>
              <Button>
                Login
              </Button>
            </form>
          </Col>
          <Col lg={4} sm={3} />
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password
  }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged })(Login);