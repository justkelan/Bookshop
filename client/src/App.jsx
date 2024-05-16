import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import AddBook from './Component/AddBook'
import ShowAll from './Component/ShowAll'
import NavBar from './Component/NavBar'
import NotFound from './Component/NotFound'
import UpdateBook from './Component/UpdateBook'

function App() {

  return (
    <div className='m-5'>
      <h1 className='text-amber-500 text-6xl text-center'>Yuh at my book shop</h1>
      <NavBar />
      <Routes>
        <Route path='/' element={<ShowAll />} />
        <Route path='/book/'>
          <Route path='add' element={<AddBook />} />
          <Route path='update/:id' element={<UpdateBook />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
