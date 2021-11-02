import { Component } from '@angular/core';

@Component({ //Este decorador
  selector: 'app-root', //Selector es la etiqueta que despliega cosas en el index
  //
  templateUrl: './app.component.html', //Dice que es el compoente que despliega la vista en el index html princial
  //POnemos la ruta del compoente x default o principal

  template :'<h1>Dentro de un component.ts<h1>W', //Siorve para poner html 
  styleUrls: ['./app.component.scss'] //Manda al estilo 

  //Si borramos lo de arriba da error, 
})

//Esta clase toma las caracteristicas del decorador (el de arriba), 
//El decorador tiene mas jerarquia que una niustancia de clase
export class AppComponent {
  title = 'Hola profe Miguel'; //Es el titulo de la pestaña en el navegador
  numero: number = 0; //Este se manda y lo controlamos en otros lados  
  b: number = 1;
  aux:number = 0;
}
