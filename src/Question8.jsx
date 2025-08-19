import {useState} from 'react';

function Form(){

    const [name, setName] = useState('Viplav Magar');
    const [age, setAge] = useState(22);

    return(
        <>
        <h2>Question 8</h2>
        <input value={name} onChange={e=>setName(e.target.value)} />

        <button onClick={()=>setAge(age + 1)}>Increment Age</button>

        <p>Hello, {name}. You are {age}.</p>
        </>
    );
}

export default Form