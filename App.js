import { render } from '@testing-library/react';
import React, { Component } from 'react';


//Exercise 1
state = {
    firstName: 'Reggie',
    lastName: 'White'
}

class App extends Component{
    constructor (props){
        super(props);
        this.name = [
            {firstName},
            {lastName},
        ]
    }
}


//Exercise 2
state = {
    names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kellie']
}

//Exercise 4
state = {
    superheroes = [
        {
            superheroId: 1,
            name: 'Batman',
            primaryAbility: 'Wealthy',
            secondarAbility: 'Rich'
        },
        {
            superheroId: 2,
            name: 'Superman',
            primaryAbility: 'Super strength',
            secondarAbility: 'Fly'
        },
        {
            superheroId: 3,
            name: 'Spiderman',
            primaryAbility: 'Spider senses',
            secondarAbility: 'Shoots web'
        }
    ]
}
render(){
    return(
        <DisplayName />
    )
}

export default App;
