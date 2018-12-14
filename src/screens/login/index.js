import React, { Component } from 'react';
import LoginCard from '../../components/login_card';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <LoginCard />
        </header>
      </div>
    );
  }
}

export default App;
