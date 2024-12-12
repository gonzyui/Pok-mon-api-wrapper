# Pokémon API Wrapper

A simple Node.js wrapper for the Pokémon API.

## Installation

```bash
npm install pokemon-api-wrapper
```

## Methods

```js
- getPokemon(pokemonName) // Fetch data for a specific Pokémon.
- getAbility(abilityName) // Fetch data for a specific ability.
- getPokemonSpecies(pokemonName) // Return data about Pokémon specie
- getType(typeName) // Return informations for a specific type
- getPokemonByType(typeName) // Return list of Pokémon for a specific type
- getEvolutionChain(pokemonName) // Return evolution chain for a specific Pokémon
- getPokemonList(offset, limit) // Return paginated list of Pokémon
- getBerries(offset, limit) // Return paginated list of berries
- getRandomokemon() // Return randomly a Pokémon
```

## Usage

```js
const PokemonAPI = require('pokemon-api-wrapper');

const api = new PokemonAPI();

(async () => {
const pikachu = await api.getPokemon('pikachu');
console.log(pikachu);
})();
```