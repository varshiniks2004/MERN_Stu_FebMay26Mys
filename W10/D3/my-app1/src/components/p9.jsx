//stop event propagation//
//event stopPropagation//
export function EventObj(){
    const handleParentClick = (event) => {
        alert(`Parent clicked target : ${event.target.targetName} currentTarget : ${event.currentTarget.tagName}`);
    };

    const handleChildClick = (event) => {
        event.stopPropagation();
        alert(`Child clicked (propagation stopped) target : ${event.target.targetName} currentTarget : ${event.currentTarget.tagName}`);
    };

    //form submit handler
    const handleSubmit = (event) =>{
        event.preventDefault()
        alert("Form submitted safely by reventing default refresh");
    };

    const handleBoxClick = (event) => {
        alert(`Box clicked target : ${event.target.targetName} currentTarget : ${event.currentTarget.tagName}`);
    };
    return(
        <section onClick={handleParentClick} style={{padding:'20px', backgroundColor:'plum'}}>
            <h2>Event Object</h2>

            <button onClick={handleChildClick}>CHILD BUTTON</button>
            <button onClick={handleSubmit}>SUBMIT FORM</button>

            <div onClick={handleBoxClick} style={{padding:'20px', backgroundColor:'pink'}}>
                <span style={{padding:'20px', backgroundColor:'blue' ,display:'inline-block'}}>Inner Span</span>
            </div>
        </section>
    )
};