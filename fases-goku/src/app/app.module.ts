import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PokemonesModule } from './Pokemons/pokemonses.module';
//import { PokemonComponent } from './Pokemons/Pokemon/pokemon.component';
//import { ListadoComponent } from './Pokemons/listado/listado.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ //y aqui se importa lo de pokemonses.module.ts
    BrowserModule, PokemonesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
