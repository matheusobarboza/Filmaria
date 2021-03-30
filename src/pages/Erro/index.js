import { Link } from 'react-router-dom';
import './erro.css';

export default function Errp() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Página não encontrada!</h2>
      <Link to="/" >Página Inicial</Link>
    </div>
  );
}