// Basic events in React
// What is an Event? An action triggered by the user(mouseEvent,keyboardEvent,DOMevents)
// React uses camelCase attributes like onClick, onChange..
// React passes an event object (SyntheticEvent) to the Handler 

export function EventBasics(){
    // Declaring a event handler function
    const handleClick = () => alert("Clicked");
    return(
        <section>
            <h2>Basic Events</h2>
            {/* Event binding */}
            <button onClick ={handleClick}> 
                Click Me
            </button>
        </section>
    )
}