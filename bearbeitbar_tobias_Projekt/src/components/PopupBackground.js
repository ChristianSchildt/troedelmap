import React from 'react';
import '../Components.css';
import ImageButton from '../components/ImageButton';
import Picture from '../components/Picture';

class PopupBackground extends React.Component {
  
  render() {
    return (
      <div>
        <div id={this.props.id}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default PopupBackground;