import React from 'react';
import ReactDOM from 'react-dom';

class StateDemo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fruit:"Apple",
            color:'Yellow'
        };
    }
    changecolor(){
        this.setState({color:'Green'});
    }
    render(){
        return(
            <div>
                <h1>this fruit is {this.state.fruit}</h1>
                <p>fruit is {this.state.color} color</p>
                <button onClick={this.changecolor}>Change</button>
            </div>
        )
    }
}

export default StateDemo;