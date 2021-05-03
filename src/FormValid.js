import React from 'react';

class FormValid extends React.Component {
    constructor(props) {
      super(props);
      this.state = 
      { textval: '',
        checked:"off"
     };
    }
    validClick(){
      if (this.state.textval===""){
      alert("Give valid text value");
      return;
      }
      if(this.state.checked==="off")
      alert("Accept terms and conditions")
      if(this.state.textval!==""&&this.state.checked==="on")
      alert("Done")
    }
    textChange=(event)=>{
        this.setState({textval:event.target.value});        
    }
    checkboxChange=(event)=>{
        this.setState({checked:event.target.value});
    }
    checkedChange=(event)=> {
        var checked = event.target.checked;
        alert(checked);
    }
    render() {
        return (
          <div>
          <h3>Handle form in React</h3>
          <input type="text" onChange={this.textChange}></input><br/><br/><br/>
          <input type="checkbox" onChange={this.checkboxChange}/><label>Accept the Terms and Conditions</label><br/><br/>
          <button onClick={this.validClick.bind(this)}>Click</button>
          </div>
        );
      }
    }
    export default FormValid;