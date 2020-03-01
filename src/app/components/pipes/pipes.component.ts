import { Component, OnInit } from '@angular/core';
import { resolve } from 'url';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html'
})
export class PipesComponent   {

  nombre = "FerNando";
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;
  heroe = {
    nombre: "Logan",
    clave: "wolverine",
    edad: 500,
    direcion: {
      calle: "Princesa",
      numero: 5,
      letra: "a"
    }
  }

  valorDeLaPromesa= new Promise(  ( resolve, reject ) =>{
    
    setTimeout( ()=> resolve('llegó la data!'),3500 );

  } )

  fecha = "2017-01-01";
  fecha1 = new Date();

    constructor() { }

 

}
