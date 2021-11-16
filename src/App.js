import logo from './logo.svg';
import './App.css';
import DisplayName from './components/DisplayName';
import { Component } from 'react';



class App extends Component {
  //Exercise 1
  state = {
    firstName: 'Reggie',
    lastName: 'White',
}
  render(){
    return(
      <div>
      <h1>Persons name</h1>
      <DisplayName firstName={this.state.firstName} lastName={this.state.lastName}/>
      </div>
      );
}
}

export default App;
