import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { emailChanged, passwordChanged, loginUser } from '../actions'

class Login extends Component {
  renderButton() {
    const { email, password, loading } = this.props

    if (loading) {
      return <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
    }
    return (
      <Button
        bsStyle='primary'
        onClick={() => {this.props.loginUser({ email, password })}}
      >
        Login
      </Button>
    )
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col lg={4} sm={3} />
          <Col lg={4} sm={6} >
            <h3>Gastos App</h3>
            <br/>
            <br/>
            <p className='error-text'>{this.props.error}</p>
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
              {this.renderButton()}
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
    password: state.auth.password,
    loading: state.auth.loading,
    error: state.auth.error
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(Login);