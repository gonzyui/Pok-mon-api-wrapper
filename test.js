const PokemonAPI = require('./index');

const api = new PokemonAPI();

(async () => {
    try {
        const pikachu = await api.getPokemon('pikachu');
        console.log('Pikachu data:', pikachu);

        const staticAbility = await api.getAbility('static');
        console.log('Static ability:', staticAbility);

        const randomPokemon = await api.getRandomPokemon();
        console.log('Random Pokémon:', randomPokemon.name);

        const fireTypePokemons = await api.getPokemonByType('fire');
        console.log('Fire-type Pokémon:', fireTypePokemons);

        const pikachuEvolution = await api.getEvolutionChain('pikachu');
        console.log('Pikachu Evolution Chain:', pikachuEvolution);

        const berries = await api.getBerries();
        console.log('Available berries:', berries);
    } catch (error) {
        console.error(error.message);
    }
})();
