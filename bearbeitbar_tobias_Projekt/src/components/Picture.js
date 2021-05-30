import React from 'react';
import '../Components.css';

class Picture extends React.Component {
  
  render() {
    return (
        <img 
          id={this.props.id} 
          src={this.props.src} 
        />
    )
  }
}

export default Picture;