import React, { Component, Props } from 'react';

class Card extends Component {
    render() {
      return <p>{this.props.value}, {this.props.suit}</p>;
    }
  }