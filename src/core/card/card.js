import React, { Component } from 'react';

export default class Card extends Component {
    render () {
        return (
            <div>
                {
                    this.props.title
                }
                {
                    this.props.children
                }
            </div>
        )
    }
}