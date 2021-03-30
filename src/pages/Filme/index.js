import { useEffect, useState } from 'react';
import './filmeInfo.css';
import { useParams, useHistory } from 'react-router-dom';
import api from '../../services/api';

import { toast } from 'react-toastify';

import { useLoading, BallTriangle } from '@agney/react-loading';

export default function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const history = useHistory();

  const { containerProps, indicatorEl } = useLoading({
    loading: isLoading,
    indicator: <BallTriangle width="50" />,
  });

  useEffect(() => {

    (async function loadFilme() {
      const response = await api.get(`r-api/?api=filmes/${id}`);

      if (response.data.length === 0) {
        history.replace('/');
        return;
      }

      setFilme(response.data);
      setIsLoading(false);
    })()
  }, [history, id]);

  function saveMovie() {

    const myList = localStorage.getItem('filmes');

    let savedMovies = JSON.parse(myList) || [];

    const hasMovie = savedMovies.some((savedMovie) => savedMovie.id === filme.id);

    if(hasMovie) {
      toast.info('Você já possui esse filme salvo.')
      return;
      //Para a execução do código aqui...
    }

    savedMovies.push(filme);
    localStorage.setItem('filmes', JSON.stringify(savedMovies));
    toast.success('Filme salvo com sucesso!');
  }

  if (isLoading) {
    return (
      <div className="filmeInfo">
        <section {...containerProps}>
          {indicatorEl}
        </section>
      </div>
    );
  }

  return (
    <div className="filmeInfo">
      <h1>{filme.nome}</h1>
      <img src={filme.foto} alt={filme.nome} />

      <h3>Sinopse</h3>
      {filme.sinopse}

      <div className="btn">
        <button onClick={saveMovie}>Salvar</button>
        <button>
          <a target="blank" href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}>
            Trailer
          </a>
        </button>
      </div>
    </div >
  );
}