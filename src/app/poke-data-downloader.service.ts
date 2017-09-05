import { Injectable } from '@angular/core';

import { HttpClientModule} from '@angular/common/http';
import { HttpClient} from '@angular/common/http';
import {CacheData} from './cache-data';
import { PokeInfo } from './poke-info';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class PokeDataDownloaderService {
	cache: CacheData;
	
	pokemonEntrySourceLinks: string[];
	
  constructor(private http: HttpClient) { //private http: HttpClient
		console.log("constructor in DownloaderService");
		
		this.cache = new CacheData();
		this.loadCache();
		this.pokemonEntrySourceLinks = [];
  }
  
  
  getPokemon(id: number){
	  return null;
  }
  
  getCache(): CacheData {
	  return this.cache;
  }
  
  handleError(error){
	  console.log("Error!");
	  console.log(error);
	  return Promise.reject(error.message || error);
  }
  
  private loadCache() {
	  
	  //redownload cache if old or missing
	  this.downloadPokemonListEntry("http://pokeapi.co/api/v2/pokemon-species");
  }
  
  private downloadPokemonListEntry(link:string){
	  console.log("downloading pokemon");
	  this.http.get(link).toPromise().then(response => {
		  console.log(response);
		  
	  }).catch(this.handleError);
  }
  

}
