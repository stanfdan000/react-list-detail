import { useEffect, useState } from 'react';
import { getPokeMonCards } from './services/fetchUtils';
import PokemonList from './Pokemon.List';
import './App.css';

function PokemonPage() {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState();
  const [pokeMonCard, setPokeMonCard] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 20;

  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const pokeMonCard = await getPokeMonCards(from, to);

      setPokeMonCard(pokeMonCard);
    }

    fetch();
  }, [page, search]);

  function handleSearch(e){
    e.preventDefault();
    setSearch(query);
  }
  return (
    <>
      <h2>Current page {page}</h2>
      <form onSubmit={handleSearch}>
        <input type='text' onChange={(e) => setQuery(e.target.value)} />
        <button type='submit'>search</button>
      </form>
      <div>
        <button onClick={() => setPage(page - 1)} 
          disabled={page === 1}>Previous page</button>
        <button onClick={() => setPage(page + 1)} 
          disabled={pokeMonCard.length < perPage}>Next page</button>
      </div>
      <PokemonList pokemon={pokeMonCard}/>
    </>
  );
}
export default PokemonPage;
