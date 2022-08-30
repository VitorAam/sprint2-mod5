import { createContext, useState } from "react";

export const ClienteContext = createContext();

export const ClienteProvider = ({ children }) => {
  const [clientes, setClientes] = useState([
    {
      nome: 'Camila',
      sobrenome: 'Leite de Melo Mendonça',
      email: 'camilinhainha@gmail.com',
      telefone: '8144028922',
      endereco1: 'Rua do coração, n° 0',
      endereco2: 'Bairro Do Meu',
      nascimento: '26/01/2001',
      cpf: '22222222222',
      renda_mensal: '1300'
    }
  ])

  return(
    <ClienteContext.Provider value={{ clientes, setClientes }}>
      {children}
    </ClienteContext.Provider>
  )
}