import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/pokemon';
import { PokemonService } from 'src/app/Service/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent implements OnInit {
  pokemons: Pokemon[] = [];
  searchTerm: any;
  filteredPokemons: Pokemon[] | undefined;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getPokemons()
      .subscribe(pokemons => this.pokemons = pokemons);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.pokemonService.addPokemon(name)
      .subscribe(newPokemon => {
        this.pokemons.push(newPokemon); 
      });
  }

  delete(pokemon: Pokemon): void {
    this.pokemons = this.pokemons.filter(p => p !== pokemon);
    this.pokemonService.deletePokemon(pokemon.id).subscribe();
  }

  search(term: string): void {

    if (term) {
      this.pokemons = this.pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(term.toLowerCase()));
    } else {
      this.getPokemons();
    }
  }
 
}