import React from 'react';

class Text extends React.Component{

    render(){
        return(
            <text
                id={this.props.id}
                value={this.props.value} 
                //...?
            />
        )
    }


}

export default Text;