import React, { Component } from 'react';
import './App.css';
import Employee from './containers/Employee/Employee.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Employee />
      </div>
    );
  }
}

export default App;
