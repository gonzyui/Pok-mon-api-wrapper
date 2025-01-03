# Pokemon API Wrapper

A simple and efficient wrapper for interacting with the [Pokémon API](https://pokeapi.co/). This wrapper provides easy access to Pokémon data, including abilities, species, types, evolution chains, and more.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/gonzyui/pokemon-api-wrapper.git
2. Install the dependencies:
    ```bash
    npm install
## Usage
After installation, you can use this wrapper to interact with the Pokémon API. 
Here's a basic example.

    const PokemonAPI = require('pokemon-api-wrapper);
    const api = new PokemonAPI();

    api.getPokemon('pikachu).then(data => {
        console.log(data);
    }).catch(error => {
        console.error(error);
    });

    api.getRandomPokemon().then(data => {
        console.log(data);
    }).catch(error => {
        console.error(error);
    });
    

### Available methods

`getPokemon(pokemonName)`

Fetches data for a specific Pokémon by name (e.g., 'pikachu').

    api.getPokemon('pikachu').then(data => {
        console.log(data);
    }).catch(error => {
        console.error(error);
    });

`getAbility(abilityName)`

Fetches data for a specofic Pokémon ability by name.

    api.getAbility('overgrow').then(data => {
        console.log(data);
    }).catch(error => {
        console.error(error);
    });

`getPokemonSpecies(pokemonName)`

Fetches data for the species of a specific Pokémon.

    api.getPokemonSpecies('pikachu').then(data => {
        console.log(data);
    }).catch(error => {
        console.error(error);
    });

`getType(typeName)`

Fetches data for a specific Pokémon type (e.g, 'fire', 'water').

    api.getType('fire').then(data => {
        console.log(data);
    }).catch(error => {
        console.error(error);
    });

`getPokemonByType(typeName)`

Fetches a list of Pokémon that belong to a specific type.

    api.getPokemonByType('fire').then(data => {
        console.log(data);  // List of Pokémon by type
    }).catch(error => {
        console.error(error);
    });

`getEvolutionChain(pokemonName)`

Fetches the evolution chain for a specific Pokémon.

    api.getEvolutionChain('bulbasaur').then(data => {
        console.log(data);
    }).catch(error => {
        console.error(error);
    });

`getPokemonList(offset, limit)`

Fetches a list of Pokémon with pagination options (offset, limit).

    api.getPokemonList(0, 10).then(data => {
        console.log(data);  // List of Pokémon
    }).catch(error => {
        console.error(error);
    });

`getBerries(offset, limit)`

Fetches a list of berries with pagination options.

    api.getBerries(0, 10).then(data => {
        console.log(data);  // List of berries
    }).catch(error => {
        console.error(error);
    });

`getRandomPokemon()`

Fetches a random Pokémon from the API.

    api.getRandomPokemon().then(data => {
        console.log(data);  // Random Pokémon data
    }).catch(error => {
        console.error(error);
    });

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/gonzyui/Pokemon-api-wrapper/blob/master/LICENSE) file for details.