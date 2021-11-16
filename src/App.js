import './App.css';
import DisplayName from './components/DisplayName/DisplayName';
import { Component } from 'react';
import NamesList from './components/NamesList/NamesList';



class App extends Component {
  //Exercise 1
  state = {
    firstName: 'Reggie',
    lastName: 'White',
  //Exercise 2
    names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],
}
  render(){
    return(
      <div>
      <h1>Exercise 1</h1>
      <DisplayName firstName={this.state.firstName} lastName={this.state.lastName}/>
      <h1>Exercise 2</h1>
      <NamesList nameList={this.state.names}/>
      </div>
      );
}
}

export default App;
