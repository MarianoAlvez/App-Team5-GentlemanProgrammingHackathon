import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-bootcamp',
  templateUrl: './bootcamp.component.html',
  styleUrls: ['./bootcamp.component.scss']
})
export class BootcampComponent implements OnInit {

  mostrarMantBootcamp:boolean=false;
  mostrarListBootcamp:boolean=true;


  constructor() {

  }

  ngOnInit(): void {


  }






  onMostrarListado(_boolea: boolean) {
    this.mostrarMantBootcamp=!_boolea;
    this.mostrarListBootcamp=_boolea;
  }
}

