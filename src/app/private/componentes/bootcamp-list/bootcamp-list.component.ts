import { Component, OnInit,AfterViewInit, ViewChild,Output,EventEmitter} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { BootcampService } from '../../servicios/bootcamp.service';
import {Bootcamp} from '../../modelo/bootcamp';
import { InformacionService } from '../../servicios/informacion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bootcamp-list',
  templateUrl: './bootcamp-list.component.html',
  styleUrls: ['./bootcamp-list.component.scss']
})
export class BootcampListComponent implements AfterViewInit,OnInit {

  @Output() mostarlistado = new EventEmitter<boolean>();

  __id:string="0";
  //private data$:Observable<string>;
  displayedColumns: string[] = ['_id','Titulo', 'Descripcion', 'Fecha', 'Acciones'];
  dataSource = new MatTableDataSource<Bootcamp>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private servicio: BootcampService,
             private informacion: InformacionService) {


  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
   this.mostrarlistado();
  }

  mostrarlistado(){

    this.servicio.listarBootcamp()
      .then(data=> this.dataSource=new MatTableDataSource<Bootcamp>(data))
      //..then(arrPlanesPrecio=>this.planesPrecios=data)
      .catch(error=>console.log(error));
  }

  btnEditar(_id:string){
   console.log(_id);
   this.informacion.sharingObservableData=_id;
   this.mostarlistado.emit(false);
    //this.informacion.disparadorInformacion.emit(_id)

  }

  btnEliminar(event:any){
    console.log(event);
  }
  btnNuevo(){
   this.mostarlistado.emit(false);
  }
}



