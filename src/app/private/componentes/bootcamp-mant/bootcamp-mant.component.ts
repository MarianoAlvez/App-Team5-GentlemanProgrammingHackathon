import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-bootcamp-mant',
  templateUrl: './bootcamp-mant.component.html',
  styleUrls: ['./bootcamp-mant.component.scss']
})
export class BootcampMantComponent implements OnInit {

  @Output() mostarlistado = new EventEmitter<boolean>();
  formularioBoot:FormGroup;

  constructor() {
    this.formularioBoot=new FormGroup({

      fechaEntrada:new FormControl('',[Validators.required]),
      titulo:new FormControl('',[Validators.required]),
      txtDescripcion:new FormControl('',[Validators.required]),
      chkProgramador:new FormControl('false'),
      chkAnalista:new FormControl('false'),
      chkPruebas:new FormControl('false'),
      chkJefe:new FormControl('false'),
      chkIng:new FormControl('false'),
      chkOtros:new FormControl('false')
    });
  }

  ngOnInit(): void {

  }
  btnAgregar(){}
  btnCancelar(){
    this.mostarlistado.emit(true);
  }
}
