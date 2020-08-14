import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';
import { URL_IMG } from '../../config/config';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styles: [
  ]
})
export class PokemonesComponent implements OnInit {

  pokemones: Pokemon[];

  constructor(
    public _pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.listarPokemones();
  }

  obtenerImagen(url: string): string{

    let fase1: string;
    let pokeId: number;

    fase1 = url.replace('https://pokeapi.co/api/v2/pokemon/', '');
    pokeId =  parseInt(fase1.replace('/', ''));

    return URL_IMG + pokeId + '.png';

  }

  listarPokemones() {
    this._pokemonService.listarPokemones()
    .subscribe( (resp: any) => {
      this.pokemones = resp.results;
    } );
  }

  verPokemon(pokemon: string) {
    this._pokemonService.verPokemon(pokemon);
  }

}
