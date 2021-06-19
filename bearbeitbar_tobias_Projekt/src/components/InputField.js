import React from 'react';
import '../Components.css';

class InputField extends React.Component{

    /*constructor(props) {
        super(props)
        }*/
    render(){
        return(
            <input
                id={this.props.id}
                type={this.props.type}
                className="inputField"
                value={this.props.value}
                defaultValue={this.props.defaultValue}
                placeholder={this.props.placeholder}
                onChange={event => console.log("value changed")}
                readOnly={this.props.readOnly}
            />
        )
    }
}

export default InputField;