import { useContext, useState } from "react"
import { Contexto, ContextoProvider } from "../../context/Contexto.jsx"
import { useParams, Link } from 'react-router-dom';

import './Cliente.css'

const Cliente = () => {
  let { id } = useParams()
  const { usuarios, setUsuarios } = useContext(ContextoProvider)

  const cliente = usuarios.filter((cliente, index) => index + 1 == id)

  const [final, setFinal] = useState(false)

  const deletarCliente = () => {
    const NovaLista = usuarios.filter((cliente, index) => index + 1 != id)
    setUsuarios([...NovaLista])
    setFinal(true)
  }

  return ( 
    <div className="cliente">
    {(final === true) && (
      <div className="final">
      <h1>Cliente deletado com sucesso!</h1>
      <Link to='/usuarios' ><button>Verificar lista de usuarios</button></Link>
      </div>
    )}
    {(final === false) && (
    <div className="cliente-container">
      <h1>Detalhes do Cliente</h1>
      <div>
        <p>Nome: {cliente[0].nome} {cliente[0].sobrenome}</p>
        <p>E-mail: {cliente[0].email}</p>
        <p>Telefone: {cliente[0].telefone}</p>
        <p>Endereço1: {cliente[0].endereco1}</p>
        <p>Endereço2: {cliente[0].endereco2}</p>
        <p>Data de Nascimento: {cliente[0].nascimento}</p>
        <p>CPF: {cliente[0].cpf}</p>
        <p>Renda Mensal: {cliente[0].renda_mensal}</p>
      </div>   
      <div className="botoes">
      <Link to='/usuarios' ><button>Voltar</button></Link>
      <button onClick={(e)=> {deletarCliente(e)}}>Deletar Cadastro</button>
      </div>  
    </div>
    )}
    </div>
   )
}
 
export default Cliente;