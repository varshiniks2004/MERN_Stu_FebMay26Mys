//passing function as props
//also called as callback props
//child components has to invite parent logic 
function ChildButton({onGreet}){
    return(
        <button onClick={onGreet}>
            Invoke parent function
        </button>
    )
}
export function FunctionProps(){
    const greet=()=>alert('Hello from parent function');
    return(
        <>
        <h2>Passing FunctionProps</h2>
        <ChildButton onGreet={greet}/>
        </>
    )
}