//react event object
//what is it
//react automatically passes an event object to event handlers
//this object contains details about the event
//eg:input field:event.target.value
//event:info about the input change
//event.target.value:the current text typed by the user
import { useState } from "react";
export function EventObject(){
    const[text,setText]=useState('');
    const handlesChange=(event)=>{
        const currentValue=event.target.value;
        console.log(currentValue);
        setText(currentValue);
    };
    return(
        <section>
            <h2>event object</h2>
            <input type="text"value={text}
            onChange={handlesChange}
            placeholder="type something"/>
            <p>You typed:{text}</p>
        </section>
    )
}