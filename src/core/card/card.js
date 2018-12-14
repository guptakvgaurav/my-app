import React, { Component } from 'react';

export default class Card extends Component {
    render () {
        return (
            <div className="card">
                <h3>{this.props.title}</h3>
                {
                    this.props.children
                }
            </div>
        )
    }
}