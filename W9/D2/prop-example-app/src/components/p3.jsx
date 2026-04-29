//container/wrapper component
import {React} from "react";
//children is a special react prop
//it holds nested JSX passed between component tags
//it helps create resuable wrapper/layout components
function Container({children}){
    return(
        <div className="card">
            {children}
        </div>
    );

}
//parent component
export function PropChildren(){
    return(
        <>
        <Container> {/*conatiner is a child component*/}
            <h3>First child element in Nested approach</h3>
        </Container>
        </>
    )
}