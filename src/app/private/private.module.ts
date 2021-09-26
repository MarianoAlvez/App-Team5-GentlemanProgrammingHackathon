import { PrivateRoutingModule } from './private.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootcampListComponent } from './componentes/bootcamp-list/bootcamp-list.component';
import { BootcampMantComponent } from './componentes/bootcamp-mant/bootcamp-mant.component';
import { BootcampComponent } from './componentes/bootcamp/bootcamp.component';

//---Se usa para las validaciones ReactiveFormsModule
import{ReactiveFormsModule}from '@angular/forms';
import {FormsModule}   from '@angular/forms';
import{HttpClientModule}from '@angular/common/http';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    BootcampListComponent,
    BootcampMantComponent,
    BootcampComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    PrivateRoutingModule
  ]

})
export class PrivateModule { }
