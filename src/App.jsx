import { 
  BrowserRouter,
  Routes,
  Route} from 'react-router-dom';
import Principal from './pages/Principal/Principal.jsx';
import Cliente from './pages/Cliente/Cliente.jsx';
import Clientes from './pages/Clientes/Clientes.jsx';
import Cadastro from './pages/Cadastro/Cadastro.jsx';
import { HeaderM } from './components/header/Header.jsx';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <HeaderM />
        <Routes>
          <Route path='/' element={<Principal />} />
          <Route path='/usuarios' element={<Clientes/>} />
          <Route path='/cadastro' element={<Cadastro/>} />
          <Route path='/usuario:id' element={<Cliente/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
