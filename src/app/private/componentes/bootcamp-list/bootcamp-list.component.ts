import { Component, OnInit,AfterViewInit, ViewChild,Output,EventEmitter} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-bootcamp-list',
  templateUrl: './bootcamp-list.component.html',
  styleUrls: ['./bootcamp-list.component.scss']
})
export class BootcampListComponent implements AfterViewInit,OnInit {

  @Output() mostarlistado = new EventEmitter<boolean>();

  displayedColumns: string[] = ['position', 'titulo', 'descripcion', 'fecha','actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {

  }

  btnEditar(event:any){
   console.log(event);
  }

  btnEliminar(event:any){
    console.log(event);
  }
  btnNuevo(){
   this.mostarlistado.emit(false);
  }
}

export interface PeriodicElement {

  position: number;
  titulo: string;
  descripcion: string;
  fecha: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, titulo: 'Angula', descripcion: 'des asdjaksdlad 1', fecha: '26/09/2021'},
  {position: 2, titulo: '.NET', descripcion: 'des asdjaksdlad 1', fecha: '26/09/2021'},
  {position: 3, titulo: 'Javascript', descripcion: 'des asdjaksdlad 1', fecha: '26/09/2021'},
  {position: 4, titulo: 'PHP', descripcion: 'des asdjaksdlad 1', fecha: '26/09/2021'},
  {position: 5, titulo: 'React', descripcion: 'des asdjaksdlad 1', fecha: '26/09/2021'},
  {position: 6, titulo: 'Vue', descripcion: 'des asdjaksdlad 1', fecha: '26/09/2021'},
  {position: 7, titulo: 'C#', descripcion: 'des asdjaksdlad 1', fecha: '26/09/2021'},
  {position: 8, titulo: 'C+', descripcion: 'des asdjaksdlad 1', fecha: '26/09/2021'},
  {position: 9, titulo: 'PowerBi', descripcion: 'des asdjaksdlad 1', fecha: '26/09/2021'},
  {position: 10, titulo: 'SQL', descripcion: 'des asdjaksdlad 1', fecha: '26/09/2021'},
  {position: 11, titulo: 'ORACLE', descripcion: 'des asdjaksdlad 1', fecha: '26/09/2021'},
  {position: 12, titulo: 'MariaDB', descripcion: 'des asdjaksdlad 1', fecha: '26/09/2021'},
  {position: 13, titulo: 'Mysql', descripcion: 'des asdjaksdlad 1', fecha: '26/09/2021'},
  {position: 14, titulo: 'Informix', descripcion: 'des asdjaksdlad 1', fecha: '26/09/2021'},
  {position: 15, titulo: 'HTML', descripcion: 'des asdjaksdlad 1', fecha: '26/09/2021'},
  {position: 16, titulo: 'CSS', descripcion: 'des asdjaksdlad 1', fecha: '26/09/2021'},
  {position: 17, titulo: 'P1', descripcion: 'des asdjaksdlad 1', fecha: '26/09/2021'},
  {position: 18, titulo: 'P2', descripcion: 'des asdjaksdlad 1', fecha: '26/09/2021'},
  {position: 19, titulo: 'P3', descripcion: 'des asdjaksdlad 1', fecha: '26/09/2021'},
  {position: 20, titulo: 'P4', descripcion: 'des asdjaksdlad 1', fecha: '26/09/2021'}
];
