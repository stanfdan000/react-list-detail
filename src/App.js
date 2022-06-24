import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom';
import PokemonPage from './PokemonPage';
import PokemonDetails from './PokemonDetails';


export default function App() {
  return (
    <Router> 
      <div className="App">
        <ul className='nav'>
          <li>
            <Link to='/'></Link>
          </li>
        </ul>
        <Switch>
          <Route exact path='/'>
            <PokemonPage />
          </Route>
          <Route exact path="/pokemon/:id">
            <PokemonDetails/>
          </Route>
        </Switch>
      </div>

    </Router>
     
  );
}


