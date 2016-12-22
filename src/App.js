import React, { Component } from 'react';
import firebase from 'firebase';

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
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
