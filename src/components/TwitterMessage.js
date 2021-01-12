import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }

  handleInput = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleInput} name="message" value={this.state.message} id="message" />
        You have {this.props.maxChars - this.state.message.length} character left.
      </div>
    );
  }
}

TwitterMessage.defaultProps = {
  maxChars: 0
}

export default TwitterMessage;
