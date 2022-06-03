import React from 'react'
import ReactDOM from 'react-dom/client'
import BookList from '.'
import Nav from './components/Nav'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav/>
    <BookList />
  </React.StrictMode>
)
