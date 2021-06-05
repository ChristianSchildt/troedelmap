import React from 'react';
import './index.css';

class BigInputField extends React.Component{

    constructor(props) {
        super(props)
        }
    render(){
        return(
            <input
                id={this.props.id}
                type="textarea"
                value={this.props.value}
                //...?
            />
        )
    }
    
}

export default BigInputField;