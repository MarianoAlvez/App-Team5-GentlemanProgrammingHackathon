import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registro: FormGroup = new FormGroup({});
    

  constructor(private fb: FormBuilder) {

    const urlRegex =  /^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/; 

    this.registro = fb.group({
    usuario: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    contrasena: new FormControl('', [Validators.required, Validators.minLength(5)]),
    repetirContrasena: new FormControl('', [Validators.required, Validators.minLength(5)]),
    linkedin: new FormControl('', [Validators.required, Validators.pattern(urlRegex)]),
    repositorio: new FormControl('', [Validators.required, Validators.pattern(urlRegex)]),
    textarea: new FormControl('', [Validators.required, Validators.minLength(20)]),}, 
    )
   }

  ngOnInit(): void {
  }

  get usuario() {
    return this.registro.get('usuario');
    }
  get email() {
    return this.registro.get('email');
    }
  get contrasena() {
    return this.registro.get('contrasena');
    }
  get repetirContrasena() {
    return this.registro.get('repetirContrasena');
    }
  get linkedin() {
    return this.registro.get('linkedin');
    }
  get repositorio() {
    return this.registro.get('repositorio');
    }
  get textarea() {
    return this.registro.get('textarea');
    }
}
