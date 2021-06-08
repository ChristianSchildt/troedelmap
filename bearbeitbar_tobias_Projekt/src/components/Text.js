import React from 'react';
import '../Components.css';

class Text extends React.Component{

    constructor(props) {
        super(props)
        }
    render(){
        return(
            <p id={this.props.id}>
                {this.props.value}
            </p>
        )
    }


}

export default Text;