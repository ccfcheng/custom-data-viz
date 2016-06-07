import React, { Component } from 'react';
import d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';

export default class HomeContainer extends Component {
  render() {
    return (
      <Home/>
    );
  }
}

class Home extends Component {
  render() {
    const list = ReactFauxDOM.createElement('ul');

    d3.select(list)
      .selectAll('li')
      .data(['first', 'second', 'third', 'd3 items'])
      .enter()
      .append('li')
      .text(d => d);

    return list.toReact();
  }
}
