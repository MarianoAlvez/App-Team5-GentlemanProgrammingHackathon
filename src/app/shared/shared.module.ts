import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PublicRoutingModule } from '../public/public.routing.module';

import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { LegalesComponent } from './legales/legales.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';




@NgModule({
  declarations: [FooterComponent, ContactoComponent, LegalesComponent, QuienesSomosComponent, PreguntasFrecuentesComponent],
  exports: [FooterComponent, ContactoComponent, LegalesComponent, QuienesSomosComponent, PreguntasFrecuentesComponent],
  imports: [CommonModule, ReactiveFormsModule, PublicRoutingModule]
})
export class SharedModule { }
