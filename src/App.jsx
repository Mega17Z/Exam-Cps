import { useState } from 'react'
import './App.css'
import NavScrollExample from './components/Navbar/Navbar'
import MainSection from './components/PremierSection/MainSection'
import Recherche from './components/RechercheSection/Recherche'

function App() {

  return (
    <>
      <NavScrollExample />
      <MainSection />
      <Recherche />
    </>
  )
}

export default App
