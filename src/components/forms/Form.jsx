import { useState, useContext } from "react";
import { Link } from 'react-router-dom'
import { Contexto } from "../../context/Contexto.jsx";
import './Form.css'

const Formulario = () => {
  const passosForm = [
    {
      id: 'parte1',
      title: "Dados Pessoais"
    },
    {
      id: 'parte2',
      title: "Endereço"
    },
    {
      id: 'parte3',
      title: "Dados Financeiros"
    }
  ];

  const [passo, setPasso] = useState(0);
  const [nome, setNome] = useState();
  const [sobrenome, setSobrenome] = useState();
  const [email, setEmail] = useState()
  const [telefone, setTelefone] = useState()
  const [endereco1, setEndereco1] = useState()
  const [endereco2, setEndereco2] = useState()
  const [nascimento, setNascimento] = useState()
  const [cpf, setCpf] = useState()
  const [renda_mensal, setRendaMensal] = useState()

  const [final, setFinal] = useState(false)

  const { clientes, setClientes } = useContext(Contexto)

  function handleProximoPasso() {
  setPasso((prevState) => prevState + 1);
  }

  function handlePassoAnterior() {
    setPasso((prevState) => prevState - 1);
  }

  function saveCliente(e) {
    const novoCliente= {
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      telefone: telefone,
      endereco1: endereco1,
      endereco2: endereco2,
      nascimento: nascimento,
      cpf: cpf,
      renda_mensal: renda_mensal
    }

    setClientes([...clientes, novoCliente])
    setFinal(true)
         
  }

  return ( 

    <div className="form-container">
    
      {(final === true) && (
        <div className="finalize">
        <h1>Cliente cadastrado com sucesso!</h1>
        <Link to='/cadastro' ><button onClick={(e)=> {
          setFinal(false)
          setPasso(0)}
          }>Cadastrar novo cliente</button></Link>
        <Link to='/clientes' ><button>Verificar lista de clientes</button></Link>
        </div>
      )}

      {(final === false) && (
      <div className="form-extra"><p className="step-guide">
        {passo + 1} de {passosForm.length}
        </p>
        <form className="steps-form" >
        {passosForm[passo].id === 'parte1' && (
        <div className="fields">
          <h1>{passosForm[passo].title}</h1>
          <div className="field">
            <input
              type="text"
              placeholder="Nome"
              name="nome"
              onChange={(e) => {setNome(e.target.value)}}
            />
        </div>
        <div className="field">
          <input
            type="text"
            placeholder="Sobrenome"
            name="sobrenome"
            onChange={(e) => {setSobrenome(e.target.value)}}
          />
        </div>
        <div className="field">
          <input
            type="text"
            placeholder="E-mail"
            name="email"
            onChange={(e) => {setEmail(e.target.value)}}
          />
        </div>
        <div className="field">
          <input
            type="text"
            placeholder="Telefone"
            name="telefone"
            onChange={(e) => {setTelefone(e.target.value)}}
          />
        </div>
      </div>
    )}
    {passosForm[passo].id === 'parte2' && (
      <div className="fields">
        <h1>{passosForm[passo].title}</h1>
        <div className="field">
          <input
            type="text"
            placeholder="Endereço 1"
            name="endereco1"
            onChange={(e) => {setEndereco1(e.target.value)}}
          />
        </div>
        <div className="field">
          <input
            type="text"
            placeholder="Endereço 2"
            name="endereco2"
            onChange={(e) => {setEndereco2(e.target.value)}}
          />
        </div> 
      </div>
    )}
    {passosForm[passo].id === 'parte3' && (
      <div className="fields">
        <h1>{passosForm[passo].title}</h1>
        <div className="field">
          <input
            type="text"
            placeholder="Data de Nascimento"
            name="nascimento"
            onChange={(e) => {setNascimento(e.target.value)}}
          />
        </div>
        <div className="field">
          <input
            type="text"
            placeholder="CPF"
            name="cpf"
            onChange={(e) => {setCpf(e.target.value)}}
          />
        </div>
        <div className="field">
          <input
            type="text"
            placeholder="Renda Mensal"
            name="renda_mensal"
            onChange={(e) => {setRendaMensal(e.target.value)}}
          />
        </div> 
      </div>
    )}

    <div className="botoes">
    
      {passo > 0 && (
      <button type="button" onClick={handlePassoAnterior}>
        Voltar
      </button>
    )}

    {passo < passosForm.length - 1 && (
      <button 
        className="button next" 
        type="button" 
        onClick={handleProximoPasso}
      >
        Próximo
      </button>
    )}


    {passo === passosForm.length - 1 && (
      <button type="button" onClick={(e)=>saveCliente(e)} >
        Enviar
      </button>

    )}

    </div>
    </form>
    </div>
    )}

  </div>)
}
 
export default Formulario;