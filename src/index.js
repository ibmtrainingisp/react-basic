//Components-reusable
//render(What do I have to render, Where do I have to render)
import React  from 'react';
import ReactDOM from 'react-dom';
// import MyIBM from './MyIBM'
// import MainContent from './MainContent';
// import Car from './Car';
// import Hurray from './hurray';
// import Helloconcat from './Helloconcat';
// import PropDemo from './PropDemo';
import Footercom from './Footercom';
// import Sample from './Sample';
// import StateDemo from './StateDemo';
// import ExerciseState from './ExerciseState';

// function Mydisplay(){
//   return (
//     <h1>Hey</h1>
//   )
// }

// class Bike extends React.Component{
//   constructor(){
//     super();
//     this.state={speed:"100KMPH"};   //this.state is used only in class component
//   }
//   render(){
//   return< h1>Hey, I am a {this.state.speed} bike!</h1>
//   }
// }

//eaxmple to access variable name from other component
// class MyApp extends React.Component{
//   render(){
//     return <h1>I am in {this.props.IBM}</h1>  //Line no:9 -PropDemo
//     //return <h1>I am in {this.props.brand}</h1>  //Line no:9 -PropDemo
//   }
//   }
//   class DemoApp extends React.Component{
//     render(){
//       const myName="Earth";
      
//         return(
//         <div>
//           <MyApp IBM={myName} />
//         </div>
//         );
//   }
//     }
// ReactDOM.render(<DemoApp />,document.getElementById('root'));

//props in constructors
class Data extends React.Component{
  constructor(props){
  super(props);
  }
  render(){
    const mystyle = {
      color: "green",
      height:"150px",
      fontFamily: "Arial"
    };
    return( 
    <div>
    <h1 style={mystyle}>Hey!! I am {this.props.name}</h1>
    <Footercom place='College'/>
    </div>
    );
  }

}
class Child extends React.Component{
  componentDidUnmount(){
    alert("It will be unmounted");
  }
  render(){
   return <h1>Fav Book!</h1>
  }
}
class Book extends React.Component{
  constructor(props){ //Mount1 //Update
    super(props);
    this.state={favbook:"XYZ"};
  }
  // static getDervivedStateFromProps(props,stae){ //Mount2
  //   return {favbook:props.favcol};
  // }

  // componentDidMount(){  //Mount4
  //   setTimeout(()=>{
  //     this.setState({favbook:"XYZ"})},1000)
  // }
  // getSnapshotBeforeUpdate(prevProps,prevState){   //Update4
  //   document.getElementById("div1").innerHTML="Initial book " + prevState.favbook;
  // }
  // shouldComponentUpdate(){//Update2
  //   return true;
  // }
  // componentDidUpdate(){ //Update5
  //   document.getElementById("div2").innerHTML="Updated book " + this.state.favbook;
  // }
  delHeader=()=>{
    this.setState({show:false});
  }
  render(){ //Mount3  //Update3
    let myheader;
    if(this.state.show){
      myheader=<Child />;   //unmount header
    };
    return(
      <div>
        {myheader}
      {/* <h1>My favourite book is {this.state.favbook}</h1> */}{/* //mount and update only */}
      {/* <div id="div1"></div> //mount and update only */}
      {/* <button onClick={this.changebook}>change book</button> */}
      {/* <div id="div2" />//mount and update only */}
      <button onClick={this.delHeader}>Delete Header</button>
      </div>
    );
  }
 
  // shouldComponentUpdate(){
  //   return true;
  // }
  //   changebook=()=>{ //mount function
  //   this.setState({favbook:"ABC"});
  // }
}

//ReactDOM.render(<Data name='Indhu' />,document.getElementById('root'));
//const myelement=<MyApp brand="IBM" />;
//ReactDOM.render(<PropDemo brand="Tesla"/>,document.getElementById('root'));
//ReactDOM.render(<DemoApp />,document.getElementById('root'));
//ReactDOM.render(<StateDemo />,document.getElementById('root'));
//ReactDOM.render(<ExerciseState />,document.getElementById('root'));
ReactDOM.render(<Book favcol="ABC"/>,document.getElementById('root'));


