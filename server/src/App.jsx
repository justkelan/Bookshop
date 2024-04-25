import { useState } from 'react'
import AddBook from './Component/AddBook'
import ShowAll from './Component/ShowAll'


function App() {
 
  return (
    <div className='m-5'>
      <h1 className='text-amber-500 text-6xl text-center'>Yuh at my book shop</h1>
      <AddBook/>
      <ShowAll/>
    </div>
  )
}

export default App
