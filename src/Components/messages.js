import React, {Component} from 'react';
import Message from './Message';
const baseURL = 'http://localhost:8082/api';

class Messages extends Component{
  constructor(props){
    super(props)
    this.state = { messages: [], allSelected: false, noneSelected: false };
  }

  componentDidMount(){
    fetch(`${baseURL}/messages`)
      .then((data)=>{
        return data.json();
      })
      .then((json)=>{
        let messagesArr2 = json._embedded.messages;
        return messagesArr2;
      })
      .then((messages)=>{
        this.setState({messages: messages});

      })
  }

  render() {
    return(
      <div className="Messages">
        { this.state && this.state.messages && this.state.messages.map( (message) =>
          <Message key={ message.id } name={ message.id } MsgSubject={ message.subject } labels= { message.labels }/>
        )}
      </div>
    );
  }
};
export default Messages;
