export class PokeInfo {
	name: string;
	spriteLoc: string;
	
	constructor (pokemonData) {
		//create the pokemon data from the json data
		this.name = pokemonData.name;
		this.spriteLoc = pokemonData.sprites.front_default;
		
	}
	
}
