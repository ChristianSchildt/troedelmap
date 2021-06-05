import React from 'react';

class BigInputField extends React.Component{

    constructor(props) {
        super(props)
        }
    render(){
        return(
            <input
                id={this.props.id}
                type="text"
                value={this.props.value}
                //...?
            />
        )
    }
    
}

export default BigInputField;