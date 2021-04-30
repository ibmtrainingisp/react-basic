import React from 'react';
import ReactDOM from 'react-dom';

class ExerciseState extends React.Component{
    constructor(props){
        super(props);
        this.state={
            color:'yellow'
        };
    }
    changecolor(){
        this.state={color:'green'};
 
    }
    render(){
        return(
            <div>
            <h1>colour is {this.state.color}</h1>
             <button onClick={this.changecolor}>Change</button>
            </div>
        )
    }
}

export default ExerciseState;