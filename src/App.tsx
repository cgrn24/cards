import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Header } from './header/Header'
import { HashRouter } from 'react-router-dom'
import { Pages } from './pages/Pages'

function App() {
  return (
    <div className='App'>
      <HashRouter>
        <Header />
        <Pages />
      </HashRouter>
    </div>
  )
}

export default App
