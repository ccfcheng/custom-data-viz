import React, { Component } from 'react';

export default class HomeContainer extends Component {
  render() {
    return (
      <Home/>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <div style={styles.content}>
        <h1>Home Screen</h1>
      </div>
    );
  }
}

const styles = {
  content: {
    marginTop: '54px'
  }
};
