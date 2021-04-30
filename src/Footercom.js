import React from 'react';

class Footercom extends React.Component{
    constructor(props){
        super(props);
        }
        render(){
          const mystyle = {
            color: "red",
            height:"50",
            fontFamily: "TNR"
          };
          return <footer style={mystyle}>Here I am at {this.props.place}</footer>
        }
}

export default Footercom;