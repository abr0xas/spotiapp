import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html' 
})
export class PipesComponent implements OnInit {

  nombre= "FerNando";
  arreglo= [1,2,3,4,5,6,7,8,9];

  constructor() { }

  ngOnInit() {
  }

}
