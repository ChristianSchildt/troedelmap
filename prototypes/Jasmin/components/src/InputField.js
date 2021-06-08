import React from 'react';
import './index.css';

class InputField extends React.Component{

    constructor(props) {
        super(props)
        }

    render(){
        return(
            <div>
            <input
                type="text"
                id={this.props.id}
                value={this.props.value}
                placeholder = {this.props.placeholder}
            >
            </input>
            </div>
        )
    }
}

export default InputField;