import React, {Component} from 'react';

class Message extends Component{
  constructor(props){
    super(props);
    this.state = { read: "read" };
  }

  render(){
    return (
      <div className="row message unread">
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" onclick={makeRead}/>
            </div>
            <div className="col-xs-2">
              <i className="star fa fa-star-o"></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
            {this.props.MsgSubject} {this.state.read}
        </div>
      </div>
    );
  }
  makeRead(){

  }
}
export default Message;
