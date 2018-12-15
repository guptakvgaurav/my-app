import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Represents the abstract card layout. It also provides some shorthands for ease-of-use.
 */
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
    /**
     * Represents title of the card.
     */
    title: PropTypes.string,
};