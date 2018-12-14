import React, { Component } from 'react';

export default class CardContent extends Component {
    render () {
        return (
            <div className="card-content">
                { this.props.children }
            </div>
        )
    }
}