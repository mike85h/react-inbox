import React, {Component} from 'react';
import Message from './Message';
import MessagesData from './MessagesData'

class Messages extends Component{
  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    return(
      <div className="Messages">
        {this.renderMessages()}
      </div>
    );
  }

  renderMessages() {
    return MessagesData.map(message => (
      <Message key={MessagesData.id} name={MessagesData.id}/>

    ));
  }

};
export default Messages;
