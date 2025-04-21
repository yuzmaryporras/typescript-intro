import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';
import { HttpAdapter, PokeApiAdapter, PokeApiFetcAdapter } from '../api/pokeApi.adapter';

export class Pokemon {

    get imageUrl(): string {
        return `http://pokemon.com/${ this.id }.jpg`;
    }

    constructor(
        public readonly id: number,
        public name: string,
        private readonly http: HttpAdapter
    ){}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);    
    }

    speack(){
        console.log(`${ this.name }, ${ this.name }`);    
    }

    async getMoves(): Promise<Move[]>{
        const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves);
        return data.moves;
    }
}

const pokeApiAxios = new PokeApiAdapter();
const pokeApiFetch = new PokeApiFetcAdapter();

export const charmander = new Pokemon(4, 'Charmander', pokeApiFetch);

console.log(charmander.getMoves());
charmander.scream();
charmander.speack();
