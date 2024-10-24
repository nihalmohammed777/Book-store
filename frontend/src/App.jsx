import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import CreateBooks from './Pages/CreateBooks'
import ShowBooks from './Pages/ShowBooks'
import EditBooks from './Pages/EditBooks'
import DeleteBooks from './Pages/DeleteBooks'

const App = () => {
  return (
    <Routes>
      <Route path='/'  element={<Home/>} />
      <Route path='/book/create'  element={<CreateBooks/>} />
      <Route path='/book/details/:id'  element={<ShowBooks/>} />
      <Route path='/book/edit/:id'  element={<EditBooks/>} />
      <Route path='/book/delete/:id'  element={<DeleteBooks/>} />
    </Routes>
  )
}

export default App