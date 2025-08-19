// passing the next state directly

import { useState } from "react";

function Exam(){

    const [age, setAge] = useState(22);

    function increment(){
        setAge(age + 1)
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

        <p>Your age {age}.</p>
        </>
    );
}

export default Exam