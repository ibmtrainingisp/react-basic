import React from 'react';

class HideShow extends React.Component {
    constructor(props) {
      super(props);
      this.state = { textval: 'Session Session' };
    }
    ShowOrHide(){
      if(document.getElementById('text').innerHTML!==" ")
      document.getElementById('text').innerHTML=" ";
      else
      document.getElementById('text').innerHTML=this.state.textval;
    }
    render() {
        return (
          <div>
          <header id='text'></header>
          <button onClick={this.ShowOrHide.bind(this)}>Click</button>
          </div>
        );
      }
    }
    export default HideShow;