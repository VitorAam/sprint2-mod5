import { 
  BrowserRouter,
  Routes,
  Route} from 'react-router-dom';
import Principal from './pages/Principal/Principal.jsx';
import Cliente from './pages/Cliente/Cliente.jsx';
import Clientes from './pages/Clientes/Clientes.jsx';
import Cadastro from './pages/Cadastro/Cadastro.jsx';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <h1>Teste</h1>
        <Routes>
          <Route path='/' element={<Principal />} />
          <Route path='/clientes' element={<Clientes/>} />
          <Route path='/cadastro' element={<Cadastro/>} />
          <Route path='/cliente:id' element={<Cliente/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
