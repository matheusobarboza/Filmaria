import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <header>
      <Link className="logo" to="/">Filmaria</Link>
        <Link className="favoritos" to="/">Favoritos</Link>
    </header>
  );
}