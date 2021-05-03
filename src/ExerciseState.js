import React from 'react';

class ExerciseState extends React.Component {
    constructor(props) {
      super(props);
      this.state = { textval: '' };
    }
    changeHeader = (event) => {
      this.setState({textval: event.target.value});
    }
    displaytext(){
    //alert(this.state.textval);
    document.getElementById('inp').innerHTML=this.state.textval;
    }
    render() {
      return (
        <div>
        <header id='inp'></header>
        <input type='text'onChange={this.changeHeader.bind(this)}></input>
        <button onClick={this.displaytext.bind(this)}>Click!</button>
        </div>
      );
    }
  }
  export default ExerciseState;
  