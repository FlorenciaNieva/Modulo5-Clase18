import './App.css'
import { useState } from 'react'
import Montaje from './components/Montaje'
import Actualizacion from './components/Actualizacion'
import Desmontaje from './components/Desmontaje'

function App() {
  const [mostrarDesmontaje, setMostrarDesmontaje] = useState(true)

  return (
    <>
      {/* <Montaje /> */}
      {/* <Actualizacion /> */}
      <button onClick={() => setMostrarDesmontaje(!mostrarDesmontaje)}>Mostrar Desmontaje</button>
      { mostrarDesmontaje ? <Desmontaje /> : <Montaje /> }
    </>
  )
}

export default App
