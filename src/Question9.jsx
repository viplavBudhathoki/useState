// passing the updater function

import {useState} from 'react';

function Example(){

    const [age, setAge] = useState(22);

    function increment(){
        setAge(a => a + 1);
    }

    return(
        <>
        <h2>Question 10</h2>
        <button onClick={()=>{
            increment();
            increment();
            increment();
        }}>+3</button>

        <button onClick={()=>{
            increment();
        }}>+1</button>
        
        <p>Your Age {age}.</p>
        </>
    );
}

export default Example