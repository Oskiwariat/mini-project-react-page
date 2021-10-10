import React, { PureComponent } from "react";

import "../styles/Donate.css";

import img from "../images/photo.png";

class Donate extends PureComponent {
  state = {
    cash: "",
    isMoneySend: false,
  };

  handleValueChange = (e) => {
    this.setState({
      cash: e.target.value,
    });
  };

  handleClick = () => {
    if (this.state.cash === "") {
      return alert("Wpisz kwotę!");
    }
    this.setState({
      cash: "",
      isMoneySend: true,
    });
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        isMoneySend: false,
      });
    }, 10000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <>
        <div className="donate">
          <img src={img} alt="hungry boy" />

          {this.state.isMoneySend ? (
            <h1>Thank you so much!</h1>
          ) : (
            <h1>Every penny counts!</h1>
          )}
          <input
            type="number"
            value={this.state.cash}
            onChange={this.handleValueChange}
            placeholder="amount..."
          />
          <button onClick={this.handleClick}>Send money</button>
          <h3>Those kids want to live like normal people</h3>
        </div>
      </>
    );
  }
}

export default Donate;
