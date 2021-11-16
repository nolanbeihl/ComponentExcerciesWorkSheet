import { Component } from "react";
import React from 'react';


// const DisplayName = (props) => {
//     return (
//         <h1>firstName={this.App.props.firstName} lastName={this.App.props.lastName}</h1>
//     );
// }
// export default DisplayName;

class DisplayName extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            firstName: '',
            lastName: ''
         }
    }

handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
        [event.target.name]: event.target.value
    });
}

handleSubmit = (event) => {
    event.preventDefault();
    this.props.displayName(this.state)
}

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <label>Please enter your first name</label>
                <input name="firstName" onChange={this.handleChange} value={this.state.firstName}/>
                <label>Please enter your last name</label>
                <input name="lastName" onChange={this.handleChange} value={this.state.lastName}/>
                <button type="submit">Add to list</button>
            </form>
         );
    }
}
 

export default DisplayName;