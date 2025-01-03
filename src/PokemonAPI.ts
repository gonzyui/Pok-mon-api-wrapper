import { Pokemon, Ability, Species, Type, EvolutionChain, Berry } from './interfaces';
import axios, { AxiosInstance } from 'axios';


export class PokemonAPI {
    private client: AxiosInstance;

    constructor(baseURL: string = 'https://pokeapi.co/api/v2/') {
        this.client = axios.create({
            baseURL,
            timeout: 5000,
        });
    }

    async getPokemon(pokemonName: string): Promise<Pokemon> {
        try {
            const response = await this.client.get(`pokemon/${pokemonName}`);
            return response.data;
        } catch (error) {
            throw new Error(`Unable to fetch Pokemon data: ${error}`);
        }
    }

    async getAbility(abilityName: string): Promise<Ability> {
        try {
            const response = await this.client.get(`ability/${abilityName}`);
            return response.data;
        } catch {
            throw new Error(`Unable to fetch Ability: ${abilityName}`);
        }
    }

    async getPokemonSpecies(pokemonName: string): Promise<Species> {
        try {
            const response = await this.client.get(`pokemon-species/${pokemonName.toLowerCase()}`);
            return response.data;
        } catch (error) {
            throw new Error(`Unable to fetch Pokemon Species data: ${error}`);
        }
    }

    async getType(typeName: string): Promise<Type> {
        try {
            const response = await this.client.get(`type/${typeName.toLowerCase()}`);
            return response.data;
        } catch (error) {
            throw new Error(`Unable to fetch type data: ${error}`);
        }
    }

    async getPokemonByType(typeName: string): Promise<string[]> {
        try {
            const typeData = await this.getType(typeName);
            return typeData.pokemon.map(pokemonInfo => pokemonInfo.pokemon.name);
        } catch (error) {
            throw new Error(`Unable to fetch Pokémon by type: ${error}`);
        }
    }

    async getEvolutionChain(pokemonName: string): Promise<EvolutionChain> {
        try {
            const speciesData = await this.getPokemonSpecies(pokemonName);
            const evolutionUrl = speciesData.evolution_chain.url;
            const evolutionData = await this.client.get(evolutionUrl);
            return evolutionData.data;
        } catch (error) {
            throw new Error(`Unable to fetch evolution chain: ${error}`);
        }
    }

    async getPokemonList(offset: number = 0, limit: number = 20): Promise<Pokemon[]> {
        try {
            const response = await this.client.get(`pokemon?offset=${offset}&limit=${limit}`);
            return response.data.results;
        } catch (error) {
            throw new Error(`Unable to fetch Pokémon list: ${error}`);
        }
    }

    async getBerries(offset: number = 0, limit: number = 20): Promise<Berry[]> {
        try {
            const response = await this.client.get(`berry?offset=${offset}&limit=${limit}`);
            return response.data.results;
        } catch (error) {
            throw new Error(`Unable to fetch berries: ${error}`);
        }
    }

    async getRandomPokemon(): Promise<Pokemon> {
        try {
            const maxPokemon = 1010; // Total Pokémon in the API
            const randomId = Math.floor(Math.random() * maxPokemon) + 1;
            return this.getPokemon(randomId.toString());
        } catch (error) {
            throw new Error(`Unable to fetch a random Pokémon: ${error}`);
        }
    }
}
