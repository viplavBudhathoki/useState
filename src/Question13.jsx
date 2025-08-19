// objects inside arrays

import {useState} from 'react';

function User(){

    const [users, setUsers] = useState([
        {first_name: "Viplav", last_name: "Budhathoki"}
    ]);

    const updateUser = (newFirstName) => {
        setUsers(
        users.map(user => ({
            ...user,
            first_name: newFirstName // update first name
        }))
        );
    };

    const resetUser = () =>{
        setUsers(
            users.map(user => ({
                ...user,
                first_name: "Viplav"
            }))
        );
    };



    return(
        <>
        <h2>Question 13</h2>

        {users.map((user, index) =>(
            <div key={index}>
                <p>
                    Name: {user.first_name} {user.last_name}
                </p>
            </div>
        ))}

        <button onClick={() => updateUser("Sankalpa")}>Update First Name</button>
        <button onClick={resetUser}>Reset First Name</button>
        </>
    );
}

export default User