import { useState } from 'react'
import { ControlledForm } from './components/p1'
import { ValidationForm } from './components/p2'
import { AsyncForm } from './components/p3'

import './App.css'

function App() {
  return (
    <>
      <ControlledForm />
      <ValidationForm />
      <AsyncForm />
    </>
  )
}

export default App