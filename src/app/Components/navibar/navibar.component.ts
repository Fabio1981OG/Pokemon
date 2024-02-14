import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/Service/pokemon.service';
import { Pokemon } from 'src/app/pokemon';

@Component({
  selector: 'app-navibar',
  templateUrl: './navibar.component.html',
  styleUrls: ['./navibar.component.css']
})
export class NavibarComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService){}

  ngOnInit(): void{
    this.getPokemons();
  }
  getPokemons(): void{
    this.pokemonService.getPokemons().subscribe(pokemons => this.pokemons = pokemons.slice(1,5));
  }
}
