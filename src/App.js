import logo from './logo.svg';
import './App.css';
import DisplayName from './components/DisplayName';



function App() {
  //Exercise 1
  this.state = {
    firstName: 'Reggie',
    lastName: 'White',
}
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
          <DisplayName firstName={this.state.firstName}/>
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
