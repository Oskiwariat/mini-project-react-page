import React from "react";
import "../styles/Contact.css";
import { Prompt } from "react-router-dom";

class ContactPage extends React.Component {
  state = {
    value: "",
  };
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      value: "",
    });
  };

  render() {
    return (
      <div className="contact">
        <form onSubmit={this.handleSubmit}>
          <h3>Contact with us!</h3>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Write a message..."
          ></textarea>
          <button>Send!</button>
          <h2>Thanks for every single help!</h2>
          <h1>♥</h1>
        </form>
        <Prompt
          when={this.state.value}
          message="Masz niewypełniony formularz. Czy na pewno chcesz opuścić tę stronę"
        />
      </div>
    );
  }
}

export default ContactPage;
