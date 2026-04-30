import { useState } from 'react'
import './App.css'
import Cadastro from './paginas/Cadastro'
import Login from './paginas/Login'
import Usuario from './paginas/Usuario'


function App() {
  const [tela, setTela] = useState('login')

    const renderizarTela = () => {
    if(tela === 'login') {
      return <Login/>

    } else if (tela === 'cadastro') {
      return <Cadastro/>

    } else if (tela === 'usuario') {
      return <Usuario/>
    }
  }

const trocarTela = (pagina) => (
  setTela(pagina)
)

  return (
    <>
        <button onClick={ () => trocarTela('login')}>Login</button>
        <button onClick={ () => trocarTela('cadastro')}>Cadastro</button>
        <button onClick={ () => trocarTela('usuario')}>Usuario</button>
        {renderizarTela()}

    </>
  )}


export default App