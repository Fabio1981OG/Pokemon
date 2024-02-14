import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailComponent } from './Components/pokemon-detalhes/pokemon-detalhes.component';
import { NavibarComponent } from './Components/navibar/navibar.component';
import { PokemonsComponent } from './Components/pokemons/pokemons.component';
import { ProcurarPorPalavraComponent } from './Components/procurar-por-palavra/procurar-por-palavra.component';


const routes: Routes = [

  { path: 'pokemons', component: PokemonsComponent },
  { path: 'navibar', component: NavibarComponent },
  { path: 'detalhes/:id', component: PokemonDetailComponent },
  { path: 'procurar-por-palavra', component: ProcurarPorPalavraComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }

