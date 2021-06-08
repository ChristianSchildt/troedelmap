import React from 'react';
import '../Components.css';

class TextHeading extends React.Component{

    constructor(props) {
        super(props)
        }
    render(){
        return(
            <h1 id={this.props.id}>
                
                {this.props.value}
            </h1>
        )
    }

}

export default TextHeading;