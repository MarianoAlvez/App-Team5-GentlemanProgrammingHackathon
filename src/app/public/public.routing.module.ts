import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { Password_resetComponent } from './password_reset/password_reset.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registro', component: RegistrationComponent },
  { path: 'recuperar', component: Password_resetComponent },
  { path: 'registro/recuperar', component: Password_resetComponent },
  { path: '*/registro', component: RegistrationComponent },
  { path: 'registro/recuperar/login', component: LoginComponent },
  { path: '*/recuperar', component: Password_resetComponent },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}