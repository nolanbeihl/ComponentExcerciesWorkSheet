import './App.css';
import DisplayName from './components/DisplayName/DisplayName';
import { Component } from 'react';
import NamesList from './components/NamesList/NamesList';



class App extends Component {
  constructor(props) {
    super(props);
  //Exercise 1
    this.state = {
    firstName: 'Reggie',
    lastName: 'White',
  //Exercise 2
    names: [],
  }
}
componentDidMount(){
  this.generateList()
}

generateList() {
  let list = ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
    console.log(list);
    this.setState({
      names : list
    })
  }


render(){
  console.log(this.state);
    return(
      <div>
      <h1>Exercise 1</h1>
      <DisplayName firstName={this.state.firstName} lastName={this.state.lastName}/>
      <h1>Exercise 2</h1>
      <h1>{this.state.names}</h1>
      </div>
      );
  }
}

export default App;
