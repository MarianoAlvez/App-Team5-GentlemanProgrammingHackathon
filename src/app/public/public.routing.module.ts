import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { Password_resetComponent } from './password_reset/password_reset.component';
import { RegistrationComponent } from './registration/registration.component';

import { ContactoComponent } from '../shared/contacto/contacto.component';
import { LegalesComponent} from '../shared/legales/legales.component';
import { PreguntasFrecuentesComponent } from '../shared/preguntas-frecuentes/preguntas-frecuentes.component';
import { QuienesSomosComponent } from '../shared/quienes-somos/quienes-somos.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registro', component: RegistrationComponent },
  { path: 'recuperar', component: Password_resetComponent },

  { path: 'contacto', component: ContactoComponent },
  { path: 'preguntasfrecuentes', component: PreguntasFrecuentesComponent },
  { path: 'legales', component: LegalesComponent },
  { path: 'quienessomos', component: QuienesSomosComponent },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}