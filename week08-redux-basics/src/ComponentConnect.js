import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            statement: 'No comment'
        };
    }

    verifyStatement = () => {
        this.props.dispatch({ type: 'VERIFY' });
    }

    // IMPLEMENT denyEverything AND noComment HERE.


    render() {
        const mapStateToProps = (state) => {
            return {
                statement: state.statement
            }
        };

        ComponentConnect = connect(mapStateToProps)(ComponentConnect);
    }


    /*
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      );
    }*/
}

export default App;
