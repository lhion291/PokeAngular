import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { PokemonesComponent } from './pages/pokemones/pokemones.component';


const routes: Routes = [
  { path: 'pokemon', component: PokemonComponent },
  { path: 'pokemones', component: PokemonesComponent },
  { path: '', redirectTo: '/pokemones', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', redirectTo: '/pokemones' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
