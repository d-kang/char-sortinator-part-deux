import React, { Component } from 'react';
import Form from './Form';
import SortList from './SortList';
import fetchSortedString  from '../actions';

class App extends Component {
  state = {
    sorted: [],
  }

  fetchSort = (payload) => {
    fetchSortedString(payload)
      .then(res => {
        this.setState({ sorted: [...this.state.sorted, res] });
      });
  }

  render() {
    return (
      <div className='App'>
        <Form
          fetchSort={this.fetchSort}
        />
        <SortList
          sorted={this.state.sorted}
        />
      </div>
    )
  }
}

export default App;
