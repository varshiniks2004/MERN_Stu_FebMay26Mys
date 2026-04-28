import { useState } from "react";
import "./App.css";

import { FunctionName } from "./components/FunctionalCompOne.jsx";
import { FunctionalComponentsBasics } from "./components/FunctionalComponentsBasics.jsx";
import { ClassComponentBasics } from "./components/ClassComponentsBasics.jsx";
import { FunctionalComp } from "./components/FunctionalComponentsAdv.jsx";
import { ClassComponentState } from "./components/ClassComponentState.jsx";

function App() {
  return (
    <>
   

      {/* <FunctionName /> */}
      {/* <FunctionalComponentsBasics /> */}

      {/* <ClassComponentBasics /> */}
      {/* <FunctionalComp/> */}
      <ClassComponentState/>
      
    </>
  );
}

export default App;