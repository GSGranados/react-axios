import React , {Component} from "react";
import "./App.css";
import User from "./Components/User/User";
class App extends Component {
  
   getUser = (e) => {
    e.preventDefault();
    const user= e.target.elements.username.value;
    console.log(user);
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="tittle">HTTP calls in React</h1>
      </header>

      <User getUser = {this.getUser}></User>
    </div>
  );
}
}

export default App;
