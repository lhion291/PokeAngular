import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styles: [
  ]
})
export class PokemonComponent implements OnInit {

  pokemon: Pokemon;
  tipos: [];
  habilidades: [];

  constructor(public _pokemonService: PokemonService) {
    this.pokemon = {};
   }

  ngOnInit(): void {
    this.traerPokemon();
  }

  traerPokemon() {
    this._pokemonService.traerPokemon()
    .subscribe( (resp: any) => {
      this.pokemon.name = resp.name;
      this.pokemon.foto = resp.sprites.front_default;
      this.tipos = resp.types;
      this.habilidades = resp.abilities;
    });
  }

}
