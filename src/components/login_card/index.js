import React, { Component } from 'react';
import { Card, CardContent } from '../../core/card/index';

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
                    <label></label>
                    <input type="email" value={ this.state.username } onChange={ this.onEmailChange }/>
                    <input type="password" value={ this.state.password } onChange={ this.onPasswordChange }/>
                    <input type="submit" onClick={ this.props.onSubmit}/> 
                </CardContent>        
            </Card>
            )
    }
}