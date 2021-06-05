import React from 'react';

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
                onChange={event => console.log("value changed")}
            />
            </div>
        )
    }
}

export default InputField;