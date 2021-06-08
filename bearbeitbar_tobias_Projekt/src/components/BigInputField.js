import React from 'react';
import '../Components.css';

class BigInputField extends React.Component{

    constructor(props) {
        super(props)
        }
    render(){
        return(
            <textarea
                id={this.props.id}
                className="InputField BigInputField"
                placeholder={this.props.placeholder}
                rows={this.props.rows}
            />
        )
    }
    
}

export default BigInputField;