//passing arguments to event handler
import { useState } from "react";
    export function PassingArguments(){
    const[message,setMessage]=useState('no message yet');
    //Event handler function
    const handleClick=(msg)=>{
        setMessage(msg);
    };
    return(
        <section>
            <h2> PassingArguments</h2>
            <button onClick={()=>handleClick("Namaste")}>click me</button>
            <p>Message:{message}</p>
        </section>
    )
}
