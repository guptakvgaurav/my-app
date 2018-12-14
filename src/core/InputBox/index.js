import React, { Component } from 'react';

export default class InputBox extends Component {
    render () {
        return (
            <div className="input-box-wrap">
                <label>{this.props.label}</label>
                <input type={this.props.type ? this.props.type : 'text'} value={ this.props.value ? this.props.value : '' } onChange={ this.props.onChange }/>
            </div>
        )
    }
}