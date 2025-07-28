import { useState } from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
// import NavScrollExample from './components/Navbar/Navbar'
// import MainSection from './components/PremierSection/MainSection'
// import Recherche from './components/RechercheSection/Recherche'
// import Affichage from './components/ResultatAffichage/Resultats'
// import Footer from './components/Footer/Footer'
import Accueil from './pages/Accueil'
import Utilisateur from './pages/utilisateur/Utilisateur'
import ReserverPlaces from './components/Places/Places'
import Validation from './components/Validation/Validation'
import Ticket from './components/Tickets/Ticket'
import Paiement from './components/Paiement/Paiement'
// import ReserverPlaces from './components/Places/Places'
// import Paiement from './components/Paiement/Paiement'
// import Ticket from './components/Tickets/Ticket'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path='/utilisateur/:id' element={<Utilisateur />}>
          <Route index element={<Navigate to="reservation" replace />} />
          <Route path='reservation' element={<ReserverPlaces />} />
          <Route path='validation' element={<Validation />} />
          <Route path='paiement' element={<Paiement />} />
          <Route path='ticket' element={<Ticket />} />
        </Route>
      </Routes>
      {/* // <Accueil /> */}
      {/* <Utilisateur /> */}
    </>
  )
}

export default App
