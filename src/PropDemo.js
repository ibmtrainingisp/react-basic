import React from 'react';

class PropDemo extends React.Component{
      render(){
        return <h1>I am in {this.props.brand}</h1>  //using props parent to child
    }
}
export default PropDemo;