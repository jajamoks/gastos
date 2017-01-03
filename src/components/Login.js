import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class Login extends Component {
  renderButton() {
    const { email, password, loading } = this.props

    if (loading) {
      return <i className="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
    }
    return (
      <Button
        bsStyle='primary'
        onClick={() => {this.props.loginUser({ email, password })}}
      >
        Iniciar Sesión
      </Button>
    )
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col sm={4} />
          <Col sm={4} >
            <h3>Gastos App</h3>
            <br/>
            <br/>
            <p className='error-login'>{this.props.error}</p>
            <form>
              <FormGroup>
                <ControlLabel>
                  Correo electrónico
                </ControlLabel>
                <FormControl
                  type='text'
                  value={this.props.email}
                  onChange={(e) => {this.props.emailChanged(e.target.value)}}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>
                  Contraseña
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
          <Col sm={4} />
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