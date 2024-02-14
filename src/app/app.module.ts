import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './Components/Base/app.component';
import { PokemonDetailComponent } from './Components/pokemon-detalhes/pokemon-detalhes.component';
import { AppRoutingModule } from './app-routing.module';
import { NavibarComponent } from './Components/navibar/navibar.component';
import { PokemonsComponent } from './Components/pokemons/pokemons.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProcurarPorPalavraComponent } from './Components/procurar-por-palavra/procurar-por-palavra.component';



@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
    ], 

    declarations: [
        AppComponent,
        NavibarComponent,
        PokemonsComponent, 
        PokemonDetailComponent,
        ProcurarPorPalavraComponent,
 
       
    ],

    providers: [],
    bootstrap: [AppComponent]
})    
export class AppModule { }
