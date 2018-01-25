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
      <div style={styles.flexContainer}>

        <div style={styles.itemBottom}>

          <Form fetchSort={this.fetchSort}/>

          <SortList sorted={this.state.sorted} />
        </div>
      </div>
    )
  }
}


const styles = {
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  item: {
    flex: '1',
    alignSelf: 'center',
  },
  itemTop: {
    alignSelf: 'flex-start',
  },
  itemBottom: {
    alignSelf: 'flex-end',
  },
  fixed: {
    flex: 'none',
    maxWidth: '50%',
  }
}

export default App;
