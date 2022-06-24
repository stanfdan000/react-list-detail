import { Link } from 'react-router-dom';

export default function Pokemon({ pokemon }) {
  return (
    <div className='Cards'>
      <Link to={`/pokemon/${pokemon.id}`}>
        <h3>{pokemon.name}</h3>
        <p>{pokemon.type}</p>
        <p>{pokemon.second_type}</p>
        <p>{pokemon.hp}</p>
        <p>{pokemon.Attack}</p>
        <p>{pokemon.defense}</p>
        <p>{pokemon.spattack}</p>
        <p>{pokemon.spdefense}</p>
        <p>{pokemon.speed}</p>
      </Link>
    </div>
    
  );
}
    
        

