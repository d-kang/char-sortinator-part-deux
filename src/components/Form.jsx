import React, { Component } from 'react';

class Form extends Component {
  state = {
    input: '',
    view: [],
  }

  handleInput = (e) => {
    console.log('val', e.target.value);
    const input = e.target.value;
    this.setState({ input });

  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const payload = this.state.input;
    this.props.fetchSort(payload);
    e.target[0].value = '';
  }

  render() {
    return (
      <form
        className='Form'
        onSubmit={this.handleFormSubmit}
      >
        <input
          className='Input'
          type='text' onChange={this.handleInput}
          required
          maxLength='29'
          placeholder='give me a string!'
        />
        <button>charsortify!</button>
      </form>
    )
  }
}

export default Form;
