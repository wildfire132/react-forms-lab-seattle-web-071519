import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: this.props.maxChars,
      remainingChars: this.props.maxChars, 
      input: ""
    };
  }

  handleChange = (event) => {
    console.log(event.target.value,"hellooooo")
    console.log(this.state)
    let newInput = event.target.value
    let newRemainingChars = this.state.maxChars - newInput.length
    this.setState((prevState) => ({
      ...prevState,
      remainingChars: newRemainingChars,
      input: newInput
    }))
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" onChange={this.handleChange}id="message" />
        <p>Remaining Characters:{this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
