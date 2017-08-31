import React, {Component} from 'react';
import MessagesData from './MessagesData';
import Message from './Message';



class Messages extends Component{
  render() {
    return(
      <div className="Messages">
        { MessagesData.map( (message) => <Message key={ message.id } name={ message.id } MsgSubject={ message.subject } /> ) }
      </div>
    );
  }
};
export default Messages;
