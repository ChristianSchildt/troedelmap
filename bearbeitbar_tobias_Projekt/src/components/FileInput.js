import React from 'react';
import '../Components.css';

class FileInput extends React.Component {
  
  render() {
    return (
        <div>
            <label 
                htmlFor={this.props.inputId}>
                {this.props.labelValue}
            </label>
            <input 
                type="file" 
                className="form-control-file"
                id={this.props.inputId}
                onChange={this.props.inputOnChange}>
            </input>
        </div>
    )
  }
}

export default FileInput;