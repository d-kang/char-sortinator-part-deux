import React, { Component } from 'react';
import Form from './Form';

class App extends Component {
  state = {
    sorted: [],
  }

  fetchSort = (payload) => {
    const url = 'http://localhost:3005/api/sort';
    const post = {
      method: 'POST',
      body: JSON.stringify({ payload }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }
    fetch(url, post)
      .then(res => res.json())
      .then(res => {
        this.setState({ sorted: [...this.state.sorted, res]});
      })
      .catch(console.error);
  }

  render() {
    return (
      <div>
        <Form fetchSort={this.fetchSort}/>
      </div>
    )
  }
}

export default App;
