import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Line_logos from './components/Line_logos/Line_logos'
import Card_card from './components/Card_card/Card_card'
import Cars_list from './components/Cars_list/Cars_list'


function App() {

  return (
    <>
    <Header/>
    <Line_logos/>
    <Cars_list/>
    </>
  )
}

export default App
