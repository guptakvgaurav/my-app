import React, { Component } from 'react';
import LoginCard from '../../components/login_card';
import SweetAlert from 'react-bootstrap-sweetalert';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: null,
      showModal: false
    }
  }
  
  showModal = (status) => {
    this.setState({
      showModal: status
    })
  }

  onLogin = (data) => {
    // TODO: data should be { username: <>, password: <>}
    this.showModal(true);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SweetAlert success="success"
                      show={ this.state.showModal}
                      title="Success!" 
                      onConfirm={() => this.showModal(false)}>
            This is just to notify that you have clicked login button.
          </SweetAlert>
          <LoginCard onSubmit={ this.onLogin }/>
        </header>
        <h1>{ this.state.message } </h1>
      </div>
    );
  }
}

export default App;
