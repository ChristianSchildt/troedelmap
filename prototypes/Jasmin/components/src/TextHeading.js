import React from 'react';
import './index.css';

class TextHeading extends React.Component{

    constructor(props) {
        super(props)
        }
    render(){
        return(
            <heading
                id={this.props.id}
                //...?
            />
        )
    }

}

export default TextHeading;