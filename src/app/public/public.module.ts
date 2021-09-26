import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Password_resetComponent } from './password_reset/password_reset.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { PublicRoutingModule } from './public.routing.module';

@NgModule({
  declarations: [LoginComponent, RegistrationComponent, Password_resetComponent ],
  imports: [CommonModule, ReactiveFormsModule, PublicRoutingModule],
})
export class PublicModule {}
