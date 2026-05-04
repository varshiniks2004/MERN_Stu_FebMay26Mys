//updating objects and arrays
import { useState } from "react";
export function UpdatingObjectsArraysState(){
    //user state
    const[user,setUser]=useState({
        name:"varsh",
        skill:"React"
    });
    const updateSkill=()=>{
        setUser({
            ...user,//copies all exisiting properties name and skill
            skill:'Advanced React'
        });
    };
    return(
        <>
        <h2>Updating objects state</h2>
        <p>{user.name}-{user.skill}</p>
        <button onClick={updateSkill}>update Skill</button>
        </>
    )
}