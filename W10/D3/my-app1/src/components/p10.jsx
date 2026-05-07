// Accessibility for custom Clickable element : To make non-button behave like a accessible button

export function Accessibility(){
    const handleClick = () => {
        alert('Custom button Clicked');
    };
    return(
        <section>
            <h2>Accessibility</h2>
            <div role="button" tabIndex= {0} onClcik = {handleClick} style={{padding:'20px', backgroundColor:'beige'}}>
                Custom Accessible Button
            </div>
            <button onClick={handleClick}>Real Button</button>
        </section>
    )
}