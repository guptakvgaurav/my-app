import React, { Component } from 'react';

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