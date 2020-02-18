import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import User from "./Components/User/User";
//https://api.github.com/users/GSGranados
class App extends Component {
  state = {
    repos: null,
  };

  getUser = e => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    if (user) {
      console.log(user);
      axios.get(`https://api.github.com/users/${user}`).then(res => {
        const repos = res.data.public_repos;
        this.setState({ repos });
        console.log(repos);
      });
    } else {
      return;
    }
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="tittle">HTTP calls in React</h1>
        </header>

        <User getUser={this.getUser}></User>
        {this.state.repos ? (
          <p>The number of repos is: {this.state.repos}</p>
        ) : (
          <p>Please Provide a Username</p>
        )}
      </div>
    );
  }
}

export default App;
