import React from 'react';
import App from '../../App';

const DisplayName = (props) => {
    return (
        <span>
            <h1>First Name: {props.firstName} <br/> Last Name: {props.lastName}</h1>
        </span>
    );
}
export default DisplayName;

