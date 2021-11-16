import React from 'react';
import App from '../../App';

const NamesList = (props) => {
    var list = [];
    for (var i = 0; i < prop.names.length; i++) {
        list.push(prop.name[i]);
        <h1>prop.name[i]</h1>;
    }
    return tbody(list)


        // <div>
        // <ul type="none">
        // <h1>List of Names:</h1>
        // <li>{props.names}</li> <br/>
        // </ul>
        // </div>
//     );
// }
export default NamesList;
