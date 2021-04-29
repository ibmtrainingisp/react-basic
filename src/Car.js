import React from 'react';

class Car extends React.Component{
    constructor(){
        super();
        this.state={colour:"BLUE"};
    }
    render(){
        return <h2>I am a {this.state.colour} car</h2>
    }
}

export default Car;