import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgModel } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    contrasena: new FormControl('', [Validators.required, Validators.minLength(5)])
  })

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  get email() {
    return this.login.get('email')
  }
  get contrasena() {
    return this.login.get('contrasena')
  }
  onLogin(){

    this.router.navigate(['/bootcamp']);
  }
}
