import React from 'react';
import './index.css';

class BigInputField extends React.Component{

    constructor(props) {
        super(props)
        }
    render(){
        return(
            <textarea 
            id={this.props.id}
            placeholder = {this.props.placeholder}>
            rows={this.props.rows}
            </textarea>
        )
    }
    
}

export default BigInputField;