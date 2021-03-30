import { useEffect, useState } from 'react';
import './filmeInfo.css';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

export default function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    (async function loadFilme(){
      const response = await api.get(`r-api/?api=filmes/${id}`);
      setFilme(response.data);
      setIsLoading(false);
    })()
  }, [id]);

  return (
    <div className="filmeInfo">
      {isLoading && (
        <h1>Carregando seu filme...</h1>
      )}
      {!isLoading && (
        <h1>Página Detalhes</h1>
      )}
    </div>
  );
}