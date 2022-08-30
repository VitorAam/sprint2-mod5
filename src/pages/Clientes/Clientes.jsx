import { useContext } from "react"
import { Link } from 'react-router-dom'
import { Contexto } from "../../context/Contexto.jsx"

import './Clientes.css'

const Clientes = () => {
  const { usuarios } = useContext(Contexto)

    return ( 
    <div className="clientes-container">
      <h1>Lista de Clientes Cadastrados</h1>
      <div>
      {usuarios.map((cliente, index) => {
        return (
          <Link key={index} to={`/usuario${index + 1}`} ><p>{`Cadastro ${index + 1}: ${cliente.nome} ${cliente.sobrenome}`}</p></Link>
        )
      })}
      </div>
      
    </div>
   )
}
 
export default Clientes;