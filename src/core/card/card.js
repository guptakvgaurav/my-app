import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
    render () {
        return (
            <div className="card">
                <h2>{this.props.title}</h2>
                {
                    this.props.children
                }
            </div>
        )
    }
}
Card.propTypes = {
    title: PropTypes.string,
};