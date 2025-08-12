// Toggle Visibility:
// Build a component with a button that toggles the visibility of a text paragraph using useState.

import {useState} from 'react';

function Toogles(){

    const [isVisible, setIsVisible] = useState(true);

    return(
        <div>
            <h2>Question 2</h2>
            <button onClick={()=>setIsVisible(!isVisible)}>{isVisible ? 'Hide' : 'Show' } Text</button>
            {isVisible && <p>This text is toogled on/off.</p>}
        </div>
    );
}

export default Toogles