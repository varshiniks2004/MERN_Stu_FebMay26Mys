import { useState } from 'react'
import { ControlledForm } from './components/p1'
import { ValidationForm } from './components/p2'

import './App.css'

function App() {
  return (
    <>
      <ControlledForm />
      <ValidationForm />
    </>
  )
}

export default App