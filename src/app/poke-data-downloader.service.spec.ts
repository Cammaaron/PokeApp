import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PokeDataDownloaderService } from './poke-data-downloader.service';
import { PokeInfo } from './poke-info';


describe('PokeDataDownloaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
	  imports: [HttpClientModule],
      providers: [PokeDataDownloaderService]
    });
  });

  it('should be created', inject([PokeDataDownloaderService], (service: PokeDataDownloaderService) => {
    expect(service).toBeTruthy();
  }));
  

  it('should have a cache', inject([PokeDataDownloaderService], (service: PokeDataDownloaderService) => {
    expect(service.getCache()).toBeTruthy();
	expect(service.getCache().data).toBeTruthy();
  }));
  
  
  xit('should have a cache of PokeInfo', inject([PokeDataDownloaderService], (service: PokeDataDownloaderService) => {
    expect(service.getCache().data[1]).toEqual(jasmine.any(PokeInfo));
  }));
  
  xit('should use the cache to download');
  
  
  xit('should be able to get the details of a pokemon', inject([PokeDataDownloaderService], (service: PokeDataDownloaderService) => {
    expect(service.getPokemon(0)).toBeTruthy();
	expect(service.getPokemon(0)).toEqual(jasmine.any(PokeInfo));
	expect(service.getPokemon(0).name).toEqual("Bulbasaur");
  }));
  
});
