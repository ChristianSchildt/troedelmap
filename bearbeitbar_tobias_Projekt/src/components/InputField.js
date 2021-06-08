import React from 'react';
import '../Components.css';

class InputField extends React.Component{

    constructor(props) {
        super(props)
        }

    render(){
        return(
            <input
                id={this.props.id}
                type={this.props.type}
                className="inputField"
                value={this.props.value}
                placeholder={this.props.placeholder}
                onChange={event => console.log("value changed")}
            />
        )
    }
}

export default InputField;