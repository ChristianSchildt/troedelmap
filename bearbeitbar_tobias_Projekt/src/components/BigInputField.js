import React from 'react';
import '../Components.css';

class BigInputField extends React.Component{

    /*constructor(props) {
        super(props)
        }*/
    render(){
        return(
            <textarea
                id={this.props.id}
                className="inputField bigInputField"
                value={this.props.value}
                defaultValue={this.props.defaultValue}
                placeholder={this.props.placeholder}
                rows={this.props.rows}
                onChange={event => console.log("value changed")}
                readOnly={this.props.readOnly}
            />
        )
    }
    
}

export default BigInputField;