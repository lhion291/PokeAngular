import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { URL_POKEMON } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemon: string;

  constructor(
    public http: HttpClient,
    public router: Router
  ) {}

  listarPokemones() {
    let url = 'https://pokeapi.co/api/v2/pokemon';
    return this.http.get(url);
  }

  verPokemon( pokemon: string ) {
    this.pokemon = pokemon;
    console.log(this.pokemon);
    this.router.navigate(['/pokemon']);
  }

  traerPokemon() {
    let url = URL_POKEMON +  this.pokemon;
    return this.http.get(url);
  }


}
