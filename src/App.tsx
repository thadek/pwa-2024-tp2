//import { useState, useEffect } from 'react'
import './App.css'
import Listcards from './Components/Listcards/Listcards'

function App() {

  return (
    <>
      <div className="flex flex-wrap gap-3 p-3">  
      <div>
        <h1 className='text-xl  text-white  lolfont uppercase'>league of legends</h1>
      </div> 
       <Listcards/>
        </div>
    </>
  )

}

export default App
