import {useState} from 'react';

function Checkbox(){

    const [liked, setLiked] = useState(true);

    function handleChange(e){
        setLiked(e.target.checked)
    }


    return(
        <>
        <h2>Question 7</h2>

        <label>
            <input type="checkbox" onChange={handleChange} checked={liked}/>
            I liked this.
        </label>

        <p>You {liked ? 'You liked' : 'You did not like'} this.</p>
        
        </>
    );
}

export default Checkbox