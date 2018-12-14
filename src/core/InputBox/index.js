import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputBox extends Component {
    render () {
        return (
            <div className="input-box-wrap">
                <label>{this.props.label}</label>
                <input placeHolder={this.props.placeHolder} type={this.props.type ? this.props.type : 'text'} value={ this.props.value } onChange={ this.props.onChange }/>
            </div>
        )
    }
}
InputBox.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
};