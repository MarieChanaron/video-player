import React from 'react';

export class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.retrieveValue = this.retrieveValue.bind(this);
  }

  retrieveValue(event) {
    const value = event.currentTarget.value;
    this.props.onChange(value);
  }

  render() {
    return (
      <form>
        <input 
          type="radio"
          name="src"
          value="fast"
          onChange={this.retrieveValue}
        /> fast
        <input 
          type="radio"
          name="src"
          value="slow" 
          onChange={this.retrieveValue}
        /> slow
        <input 
          type="radio"
          name="src"
          value="cute" 
          onChange={this.retrieveValue}
        /> cute
        <input 
          type="radio"
          name="src"
          value="eek" 
          onChange={this.retrieveValue}
        /> eek
      </form>
    );
  }
}