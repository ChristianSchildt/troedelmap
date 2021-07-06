import React from 'react';
import '../Components.css';

class BigInputField extends React.Component{

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.inputRef = React.createRef();
    }
    
    render(){
        return(
            <textarea
                id={this.props.id}
                ref={this.inputRef}
                className="inputField bigInputField"
                defaultValue={this.props.defaultValue}
                placeholder={this.props.placeholder}
                rows={this.props.rows}
                onChange={(event) => this.setState({value: event.target.value})}
                readOnly={this.props.readOnly}
            />
        )
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps.defaultValue !== this.props.defaultValue) {
            this.inputRef.current.value = this.props.defaultValue;
        }
    }
    
    getValue() {
        return this.state.value !== "" ? this.state.value : (this.props.defaultValue || "") 
    }
}

export default BigInputField;