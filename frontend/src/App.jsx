import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import ShowBook from './page/ShowBook'
import EditBook from './page/EditBook'
import NewBook from './page/NewBook'
import CreateBook from './page/CreateBook'
import DeleteBook from './page/DeleteBook'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/books/create' element={ <CreateBook /> } />
      <Route path='/books/details/:id' element={ <ShowBook /> } />
      <Route path='/books/edit/:id' element={ <EditBook /> } />
      <Route path='/books/delete/:id' element={ <DeleteBook /> } />
    </Routes>
  )
}

export default App
