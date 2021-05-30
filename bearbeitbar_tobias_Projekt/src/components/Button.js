import React from 'react';
import '../Components.css';

class Button extends React.Component {
  
  render() {
    return (
        <a href={this.props.href}>
          <button 
            class={this.props.className} 
            id={this.props.id}
            type="submit"
            onClick={this.props.onClick}> 
            {this.props.value}
          </button>
        </a>
    )
  }
}

export default Button;