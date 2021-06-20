import React from 'react';
import '../Components.css';

class InputField extends React.Component{

    constructor(props) {
        super(props);
        this.state = {value: ''};
    }
   
    render(){
        return(
            <input
                id={this.props.id}
                type={this.props.type}
                className="inputField"
                value={this.props.value}
                defaultValue={this.props.defaultValue}
                placeholder={this.props.placeholder}
                onChange={(event) => this.setState({value: event.target.value})}
                readOnly={this.props.readOnly}
            />
        )
    }
}

export default InputField;