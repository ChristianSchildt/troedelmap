import React from 'react';
import './index.css';

class Text extends React.Component{

    state = {
        text: " "
    }
    constructor(props) {
        super(props)
        }
    render(){
        return(
            <text
                id={this.props.id}
                value={this.props.value}
            />
        )
    }


}

export default Text;