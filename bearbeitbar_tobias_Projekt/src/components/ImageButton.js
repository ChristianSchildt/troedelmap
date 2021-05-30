import React from 'react';
import '../Components.css';

class ImageButton extends React.Component {

  render() {
    return (
        <a href={this.props.href}>
          <img 
            id={this.props.id}
            class={this.props.className} 
            src={this.props.src} 
            onClick={this.props.onClick}
            alt="Hier sollte ein Bild sein!">
          </img>
        </a>
    )
  }
}

export default ImageButton;