import {useState} from 'react';

function Input(){

    const [text, setText] = useState('Hello');

    function handleChange(e){
        setText(e.target.value)
    }

    return(
        <>
        <h2>Question 6</h2>
        <input value={text} onChange={handleChange} />
        <p>You are typing: {text}</p>

        <button onClick={()=> setText("Viplav")}>
        Reset
        </button>
        </>
    );
}

export default Input