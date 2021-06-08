import React from 'react';
import '../Components.css';

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
                placeholder={this.props.placeholder}
                onChange={event => console.log("value changed")}
            />
            </div>
        )
    }
}

export default InputField;