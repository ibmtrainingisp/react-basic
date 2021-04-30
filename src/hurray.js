import React from 'react';

class Hurray extends React.Component{
      render(){
      return  [...Array(5)].map((Hurrayel, count) => <p key={count}>Hurray!!</p>) 
    }
}

export default Hurray;