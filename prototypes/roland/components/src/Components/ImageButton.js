import React from 'react';
import './Components.css';

class ImageButton extends React.Component {

  render() {
    return (
        <img 
          id={this.props.id} 
          src={this.props.src} 
          onClick={this.props.onClick}
          alt="Hier sollte ein Bild sein!">
        </img>
    )
  }
}

export default ImageButton;