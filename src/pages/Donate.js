import React, { PureComponent } from "react";

import "../styles/Donate.css";

import img from "../images/photo.png";

class Donate extends PureComponent {
  state = {
    cash: "",
  };

  handleValueChange = (e) => {
    this.setState({
      cash: e.target.value,
    });
  };

  handleClick = () => {
    this.setState({
      cash: "",
    });
  };
  render() {
    return (
      <>
        <div className="donate">
          <img src={img} alt="hungry boy" />

          <h1>Every penny counts!</h1>
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
