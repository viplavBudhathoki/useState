// Objects in react

import { useState } from "react";

function UserProfile(){

    const [user, setUser] = useState({first_name: "Viplav", last_name: "Budhathoki", age: 22});

    const updateFirst_name = () => {
        setUser(
            {
                ...user, first_name: "Sangram"
            }
        )
    };

    const updateLast_name = () => {
        setUser(
            {
                ...user, last_name: "Magar"
            }
        )
    };

    const updateAge = () => {
        setUser(
            {
                ...user, age: user.age + 1
            }
        )
    };

    const reset = () => {
        setUser({
            first_name: "Viplav", last_name: "Budhathoki", age: 22
        })
    };




    return(
        <>
        <h2>Question 11</h2>
        <p>Name: {user.first_name} {user.last_name}</p>
        <p>Age: {user.age}</p>

        <button onClick={updateFirst_name}>Change Name: </button>
        <button onClick={updateAge}>Increment Age:</button>

        <button onClick={reset}>Reset Name</button>
        </>
    );
}

export default UserProfile