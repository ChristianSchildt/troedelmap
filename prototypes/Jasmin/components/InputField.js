import React from 'react';

class InputField extends React.Component{

    constructor(props) {
        super(props);
        }

    render(){
        return(
            <input
                type="text"
                id={this.props.id}
                value={this.props.value}
                //onChange, do we need the value, should value be done differently...?
            />
        )
    }
}

export default InputField;