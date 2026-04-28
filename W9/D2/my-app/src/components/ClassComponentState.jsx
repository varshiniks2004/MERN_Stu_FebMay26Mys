// import {React} from "react";

import { Component } from "react";

export class ClassComponentState extends Component{
    // 1. Constructor : runs once when component is first created 
    constructor(props){
        super(props); // Calls parent constructor first 
        this.state = { count:0 }; // State is going to be here and stays evn after the re-renders
    }

    // 2. Event Handler : arrow function to handle 'this' binding
    increment = () => {
        this.setState((prevStates )=>({
            count : prevStates.count + 1
        }));
    };

    // 3. Render : State/props change
    render(){
        console.log("render() called");
        return(
            <div>
                <h3>Class Component State</h3>
                <p>Count : {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}