import React from 'react';

class Helloconcat extends React.Component{
      render(){
    return  [...Array(26)].map((Helloarr, count) => <p key={count}>Hello!! {String.fromCharCode(65+count)}</p>) 
    }
}

export default Helloconcat;