import React, { Component } from 'react';
import App from '../../App';

class NamesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names : ""
        }
    }

  render(){
      return ( 
        <div>
        <ul type="none">
        <h1>List of Names:</h1>
        <ul><h1>{this.names}</h1></ul> <br/>
        </ul>
        </div>
      );
    }
}


    



export default NamesList;
