import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions'

class LogoutIcon extends Component {
  render() {
    return(
      <a id="logout-icon" onClick={() => this.props.logoutUser()}>
        Cerrar Sesión
        <i className="fa fa-sign-out fa-lg"></i>
      </a>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, { logoutUser })(LogoutIcon);