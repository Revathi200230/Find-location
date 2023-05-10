import React from 'react';
import ReactDOM from 'react-dom';
import LocationDisplay from './locationdisplay';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {latitude:null, errormessage:''}

    window.navigator.geolocation.getCurrentPosition(
      (position) => {this.setState({latitude : position.coords.latitude})},
      (error) => {this.setState({errormessage: error.message})}
    );
  }
//statements
render(){

  if(this.state.errormessage && !this.state.latitude)
  {
  return(<div> <h1> Error:{this.state.errormessage}</h1> </div>)
  }

  if(!this.state.errormessage && this.state.latitude)
  {
  return(<div><h1> <LocationDisplay latitude = {this.state.latitude}/> </h1></div>)
  }
  
 else{
    return <div> <h1> Waiting for allow </h1></div>
  }

  }
}

ReactDOM.render(<App />, document.querySelector('#root'))