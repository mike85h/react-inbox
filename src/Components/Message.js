import React, {Component} from 'react';

class Message extends Component{
  constructor(props){
    super(props);
    this.state = {
      read: false,
      starred: false,
      selected: false
     };
    this.handleRead = this.handleRead.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
    this.handleStarred = this.handleStarred.bind(this);
  }

  handleSelected() {
    const currentSelectedState = this.state.selected;
    this.setState({ selected: !currentSelectedState});
  };

  handleStarred(){
    const currentStarredState = this.state.starred;
    this.setState({ starred: !currentStarredState});
  };

  handleRead(){
    this.setState({ read: true });
  }

  render(){
    return (
      <div className={"row message " + (this.state.read ? "read " : "unread") + (this.state.selected ? " selected" : "")}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2" onClick={this.handleSelected}>
              <input type="checkbox"/>
            </div>
            <div className="col-xs-2 " onClick={this.handleStarred}>
              <i className={this.state.starred ? "star fa fa-star" : "star fa fa-star-o"}></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11" onClick={this.handleRead}>
            {this.props.MsgSubject}
        </div>
      </div>
    );
  }
}
export default Message;
