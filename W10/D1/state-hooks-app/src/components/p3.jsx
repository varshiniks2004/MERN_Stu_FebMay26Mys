//event handling with state
import { useState } from "react";
//in react:
//events use camelCase naming , eg:onclick, onchange

export function EventHandlingState() {
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleClick = () => {
        alert(`Hello, ${name || 'Guest'}`);
    };
    return(
        <>
        <h2>Event Handling with State</h2>

            <input
                type="text"
                value={name}
                onChange={handleChange}
                placeholder="Enter your name"
            />

            <button onClick={handleClick}>
                Greet user
            </button>
            <p>Current input:{name}</p>
        </>
        
    );
}