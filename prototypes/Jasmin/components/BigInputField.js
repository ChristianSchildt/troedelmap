import React from 'react';

class BigInputField extends React.Component{

    render(){
        return(
            <heading
                id={this.props.id}
                type="text"
                value={this.props.value}
                //...?
            />
        )
    }
    
}

export default BigInputField;