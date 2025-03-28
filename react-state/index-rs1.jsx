// ----------

//react state 2 session
/* 
difference between map and for each is that map returns a new array

arrow functions:
() => ()
if we have a return then we need curly:
() => { return }
*/

import React from 'react';
import PokemonCard from './components/PokemonCard';
import './App.css';
import './styles.css';

import { pokemons } from './utils/data';

export default function App() {
	// const pokemons = undefined;
	console.log('pokemons', pokemons);

	return (
		<main className="app">
			<h1 className="app__title">Pokédex</h1>
			<ul className="app__pokemons">
				{pokemons?.map((pokemon, index) => (
					// <li key={pokemon.id}>
					<li key={index}>
						<PokemonCard
							id={pokemon.id}
							name={pokemon.name}
							types={pokemon.types}
							image={pokemon.image}
						/>
					</li>
				))}
			</ul>
		</main>
	);
}
