# Pokémon API Wrapper

The **Pokémon API Wrapper** is a Node.js module for easily accessing data from the official Pokémon API. This update adds features to retrieve detailed information about Pokémon, including the type, abilities, stats, and image of the Pokémon in question. This version also supports the personalization of messages used for questions and answers.
## Contents

- [Presentation](#presentation)
- [Installation](#installation)
- [Usage](#Usage)
    - [Create wrapper instance](#create-wrapper-instance)
    - [Features](#features)
    - [Messages personalization](#message-personnalization)
- [Contributing](#contributing)
- [Licence](#licence)

## Présentation

Pokémon API Wrapper is designed to simplify access to Pokémon data through the official Pokémon API. This module uses Axios for HTTP requests and supports retrieving Pokémon types, abilities, stats, and images. It also includes a question-and-answer system based on Pokémon abilities.
### Update 1.1.0

This version adds the following features:
- Retrieval of a Pokémon's types, abilities, hidden abilities, stats and image.
- Personalization of messages for the question-and-answer system.

## Installation

Use npm for installation.
Node.JS 20 or newer required.

```bash
npm install pokemon-api-wrapper
```

## Usage

```js
/* Create Wrapper instance */
const PokemonAPIWrapper = require('pokemon-api-wrapper');
const wrapper = new PokemonAPIWrapper();

/* Get detailled information about a Pokémon with his name */
const data = await wrapper.getPokemonByName('pikachu');
console.log(data);

/* Get Pokémon type with his name */
const type = await wrapper.getType('pikachu');
console.log('Types :', type);

/* Get Pokémon abilities with his name */
const abilities = await wrapper.getAbilities('pikachu');
console.log('Capacités :', abilities);

/* Get Pokémon hidden abilities with his name */
const hiddenAbilities = await wrapper.getHiddenAbilities('pikachu');
console.log('Capacités cachées :', hiddenAbilities);

/* Get Pokémon statistics with his name */
const stats = await wrapper.getStats('pikachu');
console.log('Statistiques :', stats);

/* Get Pokémon image with his name */
const image = await wrapper.getImage('pikachu');
console.log('Image :', image);

/* Generate question based on Pokémon's name */
const questionData = await wrapper.getQuestion('pikachu');
console.log('Question :', questionData.question);
console.log('Correct answer :', questionData.correctAnswer);

/* Edit messages */
wrapper.setQuestionMessage('question', "What {{pokemon}}' type ?");
wrapper.setQuestionMessage('correctAnswer', 'Correct answer was {{correctAnswer}}.');
```

## Contributing 

Contributions are welcome! If you find any bugs or want to add new features, don't hesitate to open an issue or pull request.

## [License](https://github.com/gonzyui/Pokemon-api-wrapper/blob/master/LICENSE)

This `README.md` offers a complete guide on using the new features and how users can integrate this module into their projects. Be sure to adjust the image URL paths to match your specific needs if they have changed.