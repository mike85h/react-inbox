import React, {Component} from 'react';
import Messages from './Components/Messages';
import Toolbar from './Components/Toolbar'
import NewMessage from './Components/NewMessage'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    return (
      <div className="App">
        <Toolbar/>
        <Messages/>
      </div>
    );
  };
}

export default App;
