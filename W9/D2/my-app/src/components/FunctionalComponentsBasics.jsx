import React from "react";
function Welcome(props){
    return(
        <p>Hello,{props.name}</p>
    );

}
export function FunctionalComponentsBasics(){
    return(
        <div>
            <h2>Functional Components Basics</h2>
            {/*We are passing 'Rakesh' as prop welcome func receives is as {name:"Varsh"*/}
            <Welcome name="Varsh"/>
            <Welcome name="Developer"/>

        </div>
    )
}