import React, { Component } from "react";
 
class messageItems extends Component {
  constructor(props, context) {
    super(props, context);
 
    this.createTasks = this.createTasks.bind(this);
  }
 
  createTasks(message) {
    return <li key={message.key}>{message.text}</li>
  }
 
  render() {
    var messageEntries = this.props.entries;
    var listMessage = messageEntries.map(this.createTasks);
 
    return (
      <ul className="theList">
          {listMessage}
      </ul>
    );
  }
};
 
export default messageItems;