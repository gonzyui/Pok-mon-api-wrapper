export interface Pokemon {
    name: string;
    id: number;
    types: Array<{ type: { name: string } }>;
    height: number;
    weight: number;
    abilities: Array<{ ability: { name: string } }>;
    species: { name: string };
}

export interface Ability {
    name: string;
    effect_entries: Array<{
        effect: string;
        short_effect: string;
    }>;
}

export interface Species {
    name: string;
    evolution_chain: { url: string };
}

export interface Type {
    pokemon: Array<{ pokemon: { name: string } }>;
}

export interface EvolutionChain {
    chain: {
        species: { name: string };
        evolves_to: EvolutionChain[];
    };
}

export interface Berry {
    name: string;
}
