import React from 'react';

class Sample extends React.Component{
    printText(){
        console.log("lll");
    }  
    render(){
        return(
        <div>
        <input onChange></input>
        <button onClick={this.printText}>Press</button>   
        </div>
        )
    }
}
export default Sample;