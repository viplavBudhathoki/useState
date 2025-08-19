// actical React Hooks Challenges
// Counter App:
// Create a counter component using useState with buttons to increment, decrement, and reset the count.

import react, {useState} from 'react';

function Counter(){

    const [count, setCount] = useState(0);


    return(
        <div>
            <h2>Question 1</h2>
            <p>Number: {count}</p>
            <button onClick={()=>setCount(count + 1)}>Increment</button>
            <button onClick={()=>setCount(count - 1)}>Decrement</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    );
}

export default Counter



// Fetch Data on Mount:
// Build a component that fetches user data from an API (like https://jsonplaceholder.typicode.com/users) once when the component mounts, using useEffect, and displays the list.

// Timer:
// Implement a timer that counts seconds up after the component mounts. Use useEffect with cleanup to clear the timer when the component unmounts.

// Window Resize Tracker:
// Create a component that tracks and displays the current window width, updating live as the window resizes, using useState and useEffect.

// Focus Input:
// Make a component with an input and a button. When the button is clicked, use useRef to focus the input field.

// Previous State Display:
// Create a component that shows the current and previous values of a counter using useState and useEffect.

// Custom Hook:
// Write a custom hook called useDocumentTitle that sets the document’s title to a given string, and use it in a component.

// Form Validation:
// Build a login form with email and password inputs. Use useState to manage input values and show a validation message if inputs are empty when the user tries to submit.