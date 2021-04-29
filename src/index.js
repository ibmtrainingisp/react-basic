//Components-reusable
//render(What do I have to render, Where do I have to render)
import React from 'react';
import ReactDOM from 'react-dom';
import MyIBM from './MyIBM'
import MainContent from './MainContent';
import Car from './Car';
import Hurray from './hurray';

// function Mydisplay(){
//   return (
//     <h1>Hey</h1>
//   )
// }

class Bike extends React.Component{
  constructor(){
    super();
    this.state={speed:"100KMPH"};   //this.state is used only in class component
  }
  render(){
  return< h1>Hey, I am a {this.state.speed} bike!</h1>
  }
}

ReactDOM.render(<Hurray />,document.getElementById('root'));



