import { Link } from 'react-router-dom';
import './Header.css';

export const HeaderM = () => {
    return (
        <header>
            <Link to='/'><p>Home</p></Link>
            <Link to='/cadastro'><p>Cadastro</p></Link>
            <Link to='/clientes'><p>Clientes</p></Link>
        </header>
    )
}
