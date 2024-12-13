const axios = require('axios');

class PokemonAPIWrapper {
    constructor() {
        this.apiBaseURL = 'https://pokeapi.co/api/v2';
        this.questionMessages = {
            noPokemonFound: "Sorry this Pokémon does not exists.",
            question: "What's {{pokemon}}'s type(s) ?",
            correctAnswer: "Correct answer was {{correctAnswer}}."
        };
    }

    async getPokemonByName(name) {
        try {
            const response = await axios.get(`${this.apiBaseURL}/pokemon/${name}`);
            return response.data;
        } catch (error) {
            console.error('Erreur de connexion à l\'API Pokémon:', error);
            throw new Error('Erreur de connexion à l\'API Pokémon.');
        }
    }

    async getType(pokemonName) {
        const data = await this.getPokemonByName(pokemonName);
        return data.types.map(type => type.type.name).join(', ');
    }

    async getAbilities(pokemonName) {
        const data = await this.getPokemonByName(pokemonName);
        return data.abilities.map(ability => ability.ability.name).join(', ');
    }

    async getHiddenAbilities(pokemonName) {
        const data = await this.getPokemonByName(pokemonName);
        return data.abilities
            .filter(ability => ability.is_hidden)
            .map(hidden => hidden.ability.name)
            .join(', ');
    }

    async getStats(pokemonName) {
        const data = await this.getPokemonByName(pokemonName);
        return data.stats.reduce((acc, stat) => {
            acc[stat.stat.name] = stat.base_stat;
            return acc;
        }, {});
    }

    async getImage(pokemonName) {
        const data = await this.getPokemonByName(pokemonName);
        return data.sprites.front_default;
    }

    // Use to change message in questions/answers
    setQuestionMessage(type, message) {
        this.questionMessages[type] = message;
    }

    getQuestionMessage(type) {
        return this.questionMessages[type];
    }

    async getQuestion(pokemonName) {
        const pokemon = await this.getPokemonByName(pokemonName);
        const types = pokemon.types.map(typeObj => typeObj.type.name);
        const question = this.questionMessages.question.replace('{{pokemon}}', pokemon.name);
        const correctAnswers = types.join(', ');

        return {
            question,
            correctAnswer: this.questionMessages.correctAnswer.replace('{{correctAnswer}}', correctAnswers),
        };
    }
}
module.exports = PokemonAPIWrapper;