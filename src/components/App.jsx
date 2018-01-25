import React, { Component } from 'react';
import Form from './Form';
import SortedTable from './Sorted';
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
      <div>
        <Form fetchSort={this.fetchSort}/>
        <SortedTable sorted={this.state.sorted} />
      </div>
    )
  }
}

export default App;
