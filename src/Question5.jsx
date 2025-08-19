import { useState } from "react";

function Count(){

    const [count, setCount] = useState(0);

    function handleSubmit(){
        setCount(count + 1);
    }


    return(
        <>
        <h2>Question 5</h2>
        <button onClick={handleSubmit}>
            Click here {count} to see current number.
        </button>
        </>
    );
}

export default Count