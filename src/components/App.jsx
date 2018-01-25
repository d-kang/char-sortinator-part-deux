import React, { Component } from 'react';

class App extends Component {
  state = {
    input: '',
  }

  handleInput = (e) => {
    console.log('val', e.target.value);
    const input = e.target.value;
    this.setState({ input });

  }

  handleSubmit = (e) => {
    e.preventDefault();
    const payload = this.state.input;
    console.log({ payload });
    e.target[0].value = '';
    const url = 'http://localhost:3001/api/sort';
    const post = {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }
    fetch(url, post)
      .then(res => res.json())
      .then(res => console.log('res >>>', res))
  }

  render() {
    return (
      <div>

        <form action="" onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleInput}/>
          <button>charsortify!</button>
        </form>
      </div>
    )
  }
}

export default App;
