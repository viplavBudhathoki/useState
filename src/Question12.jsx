import { useState } from "react";

function FruitList(){

    const [fruits, setFruits] = useState(["Apple", "Banana", "Grapes", "Mango"]);

    const addFruit = (newFruit) =>{
        setFruits([
            ...fruits, newFruit
        ])
    };

    const removeFruit = (fruitToRemove) =>{
        setFruits(fruits.filter(
            fruit => fruit !== fruitToRemove
        ));
    };

    return(
        <>
        <h2>Question 12</h2>
        <ul>
            {fruits.map((fruit, index) => (
                <li key={index}>
                    {fruit}
                    <button onClick={()=> removeFruit(fruit)}>Delete</button>
                </li>
            ))}
        </ul>
        <button onClick={()=> addFruit("Papaya")}>Add Papaya</button>
        </>
    );
}

export default FruitList