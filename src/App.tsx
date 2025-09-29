import { useState } from 'react'
import './App.css'
import Header from './components/Header/header'
import { CardList } from './components/CardList/CardList'

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <CardList></CardList>
      </main>
    </>
  )
}

export default App
