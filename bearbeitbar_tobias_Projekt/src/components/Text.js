import React from 'react';
import '../Components.css';

class Text extends React.Component{

    constructor(props) {
        super(props)
        }
    render(){
        return(
            <span id={this.props.id} className="text">
                {this.props.value}
            </span>
        )
    }


}

export default Text;