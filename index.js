const axios = require('axios');

class PokemonAPI {
    constructor(baseURL = 'https://pokeapi.co/api/v2/') {
        this.client = axios.create({
            baseURL,
            timeout: 5000,
        });
    }

    async getPokemon(pokemonName) {
        try {
            const response = await this.client.get(`pokemon/${pokemonName}`);
            return response.data;
        } catch (error) {
            throw new Error(`Unable to fetch Pokemon data: ${error}`);
        }
    }

    async getAbility(abilityName) {
        try {
            const response = await this.client.get(`ability/${abilityName}`);
            return response.data;
        } catch {
            throw new Error(`Unable to fetch Ability: ${abilityName}`);
        }
    }

    async getPokemonSpecies(pokemonName) {
        try {
            const response = await this.client.get(`pokemon-species/${pokemonName.toLowerCase()}`);
            return response.data;
        } catch (error) {
            throw new Error(`Unable to fetch Pokemon Species data: ${error}`);
        }
    }

    async getType(typeName) {
        try {
            const response = await this.client.get(`type/${typeName.toLowerCase()}`);
            return response.data;
        } catch (error) {
            throw new Error(`Unable to fetch type data: ${error.message}`);
        }
    }

    async getPokemonByType(typeName) {
        try {
            const typeData = await this.getType(typeName);
            return typeData.pokemon.map(pokemonInfo => pokemonInfo.pokemon.name);
        } catch (error) {
            throw new Error(`Unable to fetch Pokémon by type: ${error.message}`);
        }
    }

    async getEvolutionChain(pokemonName) {
        try {
            const speciesData = await this.getPokemonSpecies(pokemonName);
            const evolutionUrl = speciesData.evolution_chain.url;
            const evolutionData = await this.client.get(evolutionUrl);
            return evolutionData.data;
        } catch (error) {
            throw new Error(`Unable to fetch evolution chain: ${error.message}`);
        }
    }

    async getPokemonList(offset = 0, limit = 20) {
        try {
            const response = await this.client.get(`pokemon?offset=${offset}&limit=${limit}`);
            return response.data.results;
        } catch (error) {
            throw new Error(`Unable to fetch Pokémon list: ${error.message}`);
        }
    }

    async getBerries(offset = 0, limit = 20) {
        try {
            const response = await this.client.get(`berry?offset=${offset}&limit=${limit}`);
            return response.data.results;
        } catch (error) {
            throw new Error(`Unable to fetch berries: ${error.message}`);
        }
    }

    async getRandomPokemon() {
        try {
            const maxPokemon = 1010; // Total Pokémon in the API
            const randomId = Math.floor(Math.random() * maxPokemon) + 1;
            return this.getPokemon(randomId.toString());
        } catch (error) {
            throw new Error(`Unable to fetch a random Pokémon: ${error.message}`);
        }
    }
}
module.exports = PokemonAPI;