import React from 'react';
import './InputField.css'

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exampleState: "test1", // weiß nicht, ob wir states hier überhaupt brauchen
    }
  }
  render() {
    return (
      <input placeholder={this.props.exampleProp}></input>
    )
  }
}

export default InputField;
