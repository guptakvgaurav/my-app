import React, { Component } from 'react';
import { Card, CardContent } from '../../core/card/index';
import InputBox from '../../core/InputBox/index';

export default class LoginCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null
        }
    }

    onEmailChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }   
    
    onPasswordChange = (event) => { 
        this.setState({
            ...this.state,
            password: event.target.value
        })
    }

    onSubmit = () => {
        const data = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.onLogin(data);
    }

    render() {
        return (
            <Card title="Login" >
                <CardContent>
                    <InputBox type="email" placeHolder="E-mail Address" value={ this.state.username ? this.state.username : '' } onChange={ this.onEmailChange }/>
                    <InputBox type="password" placeHolder="Password" value={ this.state.password ? this.state.password : ''} onChange={ this.onPasswordChange }/>
                    <button type="submit" onClick={ this.props.onSubmit}>
                        Login
                    </button> 
                </CardContent>        
            </Card>
        )
    }
}