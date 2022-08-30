import { createContext, useState } from "react";

export const Contexto = createContext();

export const ContextoProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState([
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
    <Contexto.Provider value={{ usuarios, setUsuarios }}>
      { children }
    </Contexto.Provider>
  )
}