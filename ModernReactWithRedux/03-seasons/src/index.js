import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  render() {
    return (
      <div>
        <div>Latitude: {this.state.lat}</div>
        {this.state.errorMessage && !this.state.lat ? (
          <h3>{this.state.errorMessage}</h3>
        ) : !this.state.errorMessage && !this.state.lat ? (
          <p>loading...</p>
        ) : null}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
