import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-password_reset',
  templateUrl: './password_reset.component.html',
  styleUrls: ['./password_reset.component.scss']
})
export class Password_resetComponent implements OnInit {

  recuperarContrasena = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),    
  })

  constructor() { }

  ngOnInit(): void {
  }

  get email() {
    return this.recuperarContrasena.get('email')
  }
}
