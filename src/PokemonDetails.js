import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getSinglePokeMonCard } from './services/fetchUtils';
import './App.css';

export default function PokemonDetails() {
  const [pokemon, setPokeMon] = useState({});
  const params = useParams();
  useEffect(() => {
    async function onload() {
      const data = await getSinglePokeMonCard(params.id);
      console.log(data);
      setPokeMon(data);
    }
    onload();
  }, [params.id]);

  return (
    <>
      <Link to='/'>Home</Link>
      <div>
        <h3>{pokemon.name}</h3>
        <p>{pokemon.type}</p>
        <p>{pokemon.second_type}</p>
        <p>{pokemon.hp}</p>
        <p>{pokemon.Attack}</p>
        <p>{pokemon.defense}</p>
        <p>{pokemon.spattack}</p>
        <p>{pokemon.spdefense}</p>
        <p>{pokemon.speed}</p>
      </div>
    </>
  );
}

