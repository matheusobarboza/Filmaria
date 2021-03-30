import { useState, useEffect } from 'react';
import './home.css';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {

    (async function loadFilmes() {
      const response = await api.get('r-api/?api=filmes');
      setFilmes(response.data);
    })();

  }, []);

  return (
    <div className="container">
      <div className="listFilmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.nome}</strong>
              <img src={filme.foto} alt={filme.nome} />
              <Link to="/">Acessar</Link>
            </article>
          )
        })}
      </div>
    </div>
  );
}