// Input Form:
// Create a controlled input form that updates and displays the input value live using useState.

import {useState} from 'react';

function Control(){

    const [currentValue, setValue] = useState('');


    return(
        <div>
            <h2>Question 3</h2>
            <input type="text" value={currentValue} onChange={(e)=>{setValue(e.target.value)}}/>
            <p>Live Value: {currentValue}</p>
        </div>
    );
}

export default Control