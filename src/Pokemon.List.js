import './App.css';
import Pokemon from './Pokemon';

export default function PokemonList({ pokemon }) {
  return (
    <div>
      {
        pokemon.map((card, i) =>
          <Pokemon key={card + i} pokemon={card}/> 
        )
      }

    </div>
  );

}
    