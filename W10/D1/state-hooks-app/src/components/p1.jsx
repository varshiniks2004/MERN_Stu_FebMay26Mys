import { use } from "react";
import { useState } from "react";
//use state basics
//its a react hook that adds state to functional component
//returns arrays with 2 values
//1 current state value
//2 func to update state
//syntax
//const[stateValue,setStateValue]=useState(initialValue);
export function UseStateBasics(){
    //counter
    const[count,setCount]=useState(0);
    return(
        <>
        <h2>UseStateBasics</h2>
        <p>Count:{count}</p>
        <button onClick={() => setCount(count + 1)}>
                Increment
            </button>

            <button onClick={() => setCount(count - 1)}>
                Decrement
            </button>
        </>
    );
        
        

        
}



