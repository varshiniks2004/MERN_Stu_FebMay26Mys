import { useState } from 'react'
import ManangingApiState from './components/p1'
import { UseEffectLifecycle } from './components/p2'
import { AxiosLifeCycle } from './components/p3'
import { CRUDOperations } from './components/p4'
import { PaginationCaching } from './components/p5'

import './App.css'

function App() {
  return (
    <>
      {/* <ManangingApiState /> */}
      {/* <UseEffectLifecycle /> */}
      {/* <AxiosLifeCycle /> */}
      <CRUDOperations />
      <PaginationCaching />  
    </>
  )
}

export default App;

  