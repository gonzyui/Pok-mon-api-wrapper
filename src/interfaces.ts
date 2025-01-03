export interface Pokemon {
    name: string;
    id: number;
    types: Array<{ type: { name: string } }>;
    height: number;
    weight: number;
    abilities: Array<{ ability: { name: string } }>;
    species: { name: string };
    // Ajouter d'autres propriétés selon les données spécifiques
}

export interface Ability {
    name: string;
    effect_entries: Array<{
        effect: string;
        short_effect: string;
    }>;
    // Autres propriétés spécifiques à l'ability
}

export interface Species {
    name: string;
    evolution_chain: { url: string };
    // Autres propriétés spécifiques à la species
}

export interface Type {
    pokemon: Array<{ pokemon: { name: string } }>;
    // Autres propriétés spécifiques au type
}

export interface EvolutionChain {
    chain: {
        species: { name: string };
        evolves_to: EvolutionChain[];
    };
    // Autres propriétés spécifiques à l'évolution
}

export interface Berry {
    name: string;
    // Autres propriétés spécifiques à la berry
}
