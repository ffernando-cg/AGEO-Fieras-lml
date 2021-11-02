import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { ListadoComponent } from './listado/listado.component';
import { PokemonComponent } from './Pokemon/pokemon.component';

//ng Module nos ayuda a tener una estructura similar al app module ts

//declarations arreglo de tdos los componetes dentro de la carpeta o algo asi
//Es como dividirlos, etiquetarlos
@NgModule({
  declarations:[
    ListadoComponent,
    PokemonComponent
    //Declarar componentes dentro de este modulo
  ],
  //Exports, son los compoenntes que quiero visibles
  exports: [ListadoComponent],

  imports:[CommonModule] //Este importante por alguna razon

})
export class PokemonesModule {

}
