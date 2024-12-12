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

### Using a discord.js Bot ?

```js
const { Client, EmbedBuilder } = require('discord.js');
const { Client: PokeClient } = require('pokemon-api-wrapper');

const client = new Client({ intents: [ /* Intents here */] });

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand() || interaction.commandName !== 'pokemon') return;

    const name = interaction.options.getString('name');
    const pokeClient = new PokeClient();

    try {
        const pokemon = await pokeClient.getPokemon(name.toLowerCase());
        if (!pokemon) {
            return interaction.reply({ content: "Pokemon not found", ephemeral: true });
        }

        const embed = new EmbedBuilder()
            .setTitle(pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1))
            .setThumbnail(pokemon.sprite)
            .addFields(
            { name: "Type""Type", value: pokemon.type.join(', '), inline: true },
            { name: "Attacks", value: pokemon.attacks.map(a => a.name).join(', '), inline: true }, 
            )
            .setColor('BLUE');

        return interaction.reply({ embeds: [embed] });
    } catch (error) {
        console.error(error);
        return interaction.reply({ content: "An error occurred while fetching the Pokemon data.", ephemeral: true });
    }
});

client.login('YOUR_BOT_TOKEN');

```
### Other usage
```js
const PokemonAPI = require('pokemon-api-wrapper');

const api = new PokemonAPI();

(async () => {
const pikachu = await api.getPokemon('pikachu');
console.log(pikachu);
})();
```
