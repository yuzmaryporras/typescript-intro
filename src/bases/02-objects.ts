export const pokemonIds = [1,20,30,34,66];

interface Pokemon {
    id: number,
    name: String,
    age?: number
}

export const bulgasaur: Pokemon = {
    id: 1,
    name: 'Bulgasaur',
   age: 2
}

export const charmander: Pokemon = {
    id: 4,
    name: 'Charmander',
   age: 1
}

export const pokemons: Pokemon[] = [];

pokemons.push(charmander, bulgasaur);


console.log(pokemons);
