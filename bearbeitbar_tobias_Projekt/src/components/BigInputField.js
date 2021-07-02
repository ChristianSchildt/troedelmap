import React from 'react';
import '../Components.css';

class BigInputField extends React.Component{

    constructor(props) {
        super(props);
        this.state = {value: ''};
    }
    
    render(){
        return(
            <textarea
                id={this.props.id}
                className="inputField bigInputField"
                defaultValue={this.props.defaultValue}
                placeholder={this.props.placeholder}
                rows={this.props.rows}
                onChange={(event) => this.setState({value: event.target.value})}
                readOnly={this.props.readOnly}
            />
        )
    }
    
}

export default BigInputField;