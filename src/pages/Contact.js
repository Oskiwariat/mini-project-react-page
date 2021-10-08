import React from "react";
import "../styles/Contact.css";
// import { Prompt } from "react-router-dom";

import backgroundImage from "../images/sunrise.jpg";

class ContactPage extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
    isSubmitted: false,
  };

  handleOnChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;
    if (type === "text" || type === "email" || type === "message") {
      const value = e.target.value;
      this.setState({
        [name]: value,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      name: "",
      email: "",
      message: "",
      isSubmitted: true,
    });
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        isSubmitted: false,
      });
    }, 10000);
  }

  componentWillUnmount() {
    clearTimeout(this.interval);
  }

  render() {
    return (
      <div className="contact">
        <img src={backgroundImage} alt="" />

        <div className="sendmessage">
          {this.state.isSubmitted && <span>Wiadomość wysłana</span>}
          <div className="form">
            <form>
              <i className="fas fa-address-book one"></i>
              <input
                value={this.state.name}
                onChange={this.handleOnChange}
                placeholder="Name"
                className="name"
                type="text"
                name="name"
              />
              <i className="fas fa-envelope two"></i>
              <input
                value={this.state.email}
                onChange={this.handleOnChange}
                placeholder="Email"
                className="email"
                type="email"
                name="email"
              />
              <i className="fas fa-pen three"></i>
              <input
                value={this.state.message}
                onChange={this.handleOnChange}
                type="message"
                placeholder="Message"
                className="message"
                name="message"
              ></input>
              <button onClick={this.handleSubmit} className="submitbutton">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
