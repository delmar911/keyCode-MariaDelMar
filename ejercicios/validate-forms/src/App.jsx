import { useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm'

function App() {
    return (
      <div className="flex justify-center">

        <div className='w-1/2 bg-sky-500 rounded-xl'>
          <h1 className='flex items-center'>Validate Forms</h1>
          <div className="">
            <ContactForm/>
          </div>
        </div>
      </div>  
  )
}

export default App