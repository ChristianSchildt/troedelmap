import React from 'react';
import '../Components.css';

class PopupBackground extends React.Component {
  
  render() {
    return (
        <svg id={this.props.id1}>
          <rect id={this.props.id2}/>
        </svg>
    )
  }
}

export default PopupBackground;