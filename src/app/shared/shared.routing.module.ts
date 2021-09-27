import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { LegalesComponent } from './legales/legales.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';




const routes: Routes = [
  { path: 'contacto', component: ContactoComponent },
  { path: 'preguntasfrecuentes', component: PreguntasFrecuentesComponent },
  { path: 'legales', component: LegalesComponent },
  { path: 'quienessomos', component: QuienesSomosComponent },

  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}