const PokemonAPIWrapper = require('./PokemonAPIWrapper');
const wrapper = new PokemonAPIWrapper();

// Utilisation des nouvelles fonctions
async function testPokemonAPI() {
    const pokemonName = 'pikachu';

    try {
        const type = await wrapper.getType(pokemonName);
        console.log('Types :', type);

        const abilities = await wrapper.getAbilities(pokemonName);
        console.log('Capacités :', abilities);

        const hiddenAbilities = await wrapper.getHiddenAbilities(pokemonName);
        console.log('Capacités cachées :', hiddenAbilities);

        const stats = await wrapper.getStats(pokemonName);
        console.log('Statistiques :', stats);

        const image = await wrapper.getImage(pokemonName);
        console.log('Image :', image);

        const questionData = await wrapper.getQuestion('pikachu');
        console.log('Question :', questionData.question);
        console.log('Réponse correcte :', questionData.correctAnswer);
    } catch (error) {
        console.error('Erreur :', error);
    }
}

testPokemonAPI();
