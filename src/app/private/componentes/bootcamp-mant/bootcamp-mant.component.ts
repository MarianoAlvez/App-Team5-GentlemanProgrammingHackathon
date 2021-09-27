import { Component, OnInit,AfterViewInit,Input,Output,EventEmitter ,OnDestroy} from '@angular/core';
import { FormControl, FormGroup, FormBuilder,Validators } from '@angular/forms';
import { BootcampService } from '../../servicios/bootcamp.service';
import { Bootcamp } from '../../modelo/bootcamp';
import { BootcampDto } from '../../modelo/bootcampDto';
import { Subject, Subscription } from 'rxjs';
import { InformacionService } from '../../servicios/informacion.service';

@Component({
  selector: 'app-bootcamp-mant',
  templateUrl: './bootcamp-mant.component.html',
  styleUrls: ['./bootcamp-mant.component.scss']
})
export class BootcampMantComponent implements AfterViewInit,OnInit,OnDestroy {

  @Output() mostarlistado = new EventEmitter<boolean>();
  formularioBoot:FormGroup;
  listaError:any[];
  __id:string="0";
  mensajeRetorno:string="";

 suscription:Subscription=new Subscription();

  constructor(private servicio: BootcampService,
              private fb:FormBuilder,
              private informacion: InformacionService) {


  this.listaError=new Array<any>();
  this.formularioBoot=new FormGroup({

    fechaEntrada:new FormControl('',[Validators.required]),
    titulo:new FormControl('',[Validators.required]),
    txtDescripcion:new FormControl('',[Validators.required]),
    chkProgramador:new FormControl(''),
    chkAnalista:new FormControl(''),
    chkPruebas:new FormControl(''),
    chkJefe:new FormControl(''),
    chkIng:new FormControl(''),
    chkOtros:new FormControl('')
  });
    /*this.formularioBoot=this.fb.group({
      fechaEntrada:new FormControl('',[Validators.required]),
      titulo:new FormControl('',[Validators.required]),
      txtDescripcion:new FormControl('',[Validators.required]),
      chkProgramador:new FormControl(''),
      chkAnalista:new FormControl(''),
      chkPruebas:new FormControl(''),
      chkJefe:new FormControl(''),
      chkIng:new FormControl(''),
      chkOtros:new FormControl('')
    })*/
    //this.formularioBoot.reset();
    this.__id="0";




  }
  ngAfterViewInit() {

  }
  ngOnDestroy(){

    this.suscription.unsubscribe();
  }
  ngOnInit(): void {

    //this.formularioBoot.patchValue({
      //titulo: "javascript"
     //});
     this.suscription= this.informacion.sharingObservable.subscribe(data=>
     // this.__id=data;
     {console.log("llego..."+data);
     this.__id=data;
     if(this.__id!="0"){
     this.mostrarBootcamp(data);}
    }
      );

      }

  mostrarBootcamp(_id:string){
    this.mensajeRetorno="";
    this.formularioBoot.reset();
    this.servicio.obtenerBootcamp(_id).subscribe(
      (res: any) => {
       console.log("data entrada.."+res.titulo);
       this.formularioBoot.patchValue({
       titulo: res.titulo,
       txtDescripcion:res.descripcion,
       fechaEntrada:res.fecha,
       chkProgramador:res.Programador,
       chkAnalista:res.Analista,
       chkPruebas:res.AnalistaPruebas,
       chkJefe:res.JefeProyectos,
       chkIng:res.Ingenieros,
       chkOtros:res.Otros,
      });
      console.log(this.formularioBoot.value);

      },
      errorRespo => {
        console.log(errorRespo);

      }
    );
  }
  btnAgregar(){
    this.mensajeRetorno="";
    if (this.formularioBoot.valid)
    {



      if(this.__id=="0"){

        const _bootcamp:Bootcamp={

          empresa: "61399e7b743c4f94242292dc",
          fecha:this.formularioBoot.controls['fechaEntrada'].value,
          titulo: this.formularioBoot.controls['titulo'].value,
          descripcion: this.formularioBoot.controls['txtDescripcion'].value,
          fecRegistro:new Date,
          Programador:this.formularioBoot.controls['chkProgramador'].value,
          Analista:this.formularioBoot.controls['chkAnalista'].value,
          AnalistaPruebas:this.formularioBoot.controls['chkPruebas'].value,
          JefeProyectos:this.formularioBoot.controls['chkJefe'].value,
          Ingenieros:this.formularioBoot.controls['chkIng'].value,
          Otros:this.formularioBoot.controls['chkOtros'].value


        }
      this.servicio.agregarBootcamp(_bootcamp).subscribe(
        (res: any) => {
         console.log("Se registro correctamente")
         this.mensajeRetorno="Se registro correctamente";
        //this.mensaje="Se registro correctamente";
        },
        errorRespo => {
          this.listaError=[];//limpiar
          //this.mostrarMensaje=true;
          if (errorRespo.status == 500)
           {
              Object.keys(errorRespo.error.message).forEach(key => {
              console.log(key, errorRespo.error.message[key]);

              this.listaError.push(errorRespo.error.message[key]);
            });

            }
           else{
            //console.log(errorRespo);
            //this.mensaje=errorRespo;
            this.listaError.push(errorRespo.error.message);
          }
        }
      );

     }else{

      const _bootcamp2:BootcampDto={

        empresa: "61399e7b743c4f94242292dc",
        fecha:this.formularioBoot.controls['fechaEntrada'].value,
        titulo: this.formularioBoot.controls['titulo'].value,
        descripcion: this.formularioBoot.controls['txtDescripcion'].value,
        fecRegistro:new Date,
        Programador:this.formularioBoot.controls['chkProgramador'].value,
        Analista:this.formularioBoot.controls['chkAnalista'].value,
        AnalistaPruebas:this.formularioBoot.controls['chkPruebas'].value,
        JefeProyectos:this.formularioBoot.controls['chkJefe'].value,
        Ingenieros:this.formularioBoot.controls['chkIng'].value,
        Otros:this.formularioBoot.controls['chkOtros'].value,
        _id:this.__id

      }
      this.servicio.editarBootcamp(_bootcamp2).subscribe(
        (res: any) => {
         console.log("Se registro correctamente")
         this.mensajeRetorno="Se actualizo correctamente";
        },
        errorRespo => {
          this.listaError=[];//limpiar
          //this.mostrarMensaje=true;
          if (errorRespo.status == 500)
           {
              Object.keys(errorRespo.error.message).forEach(key => {
              console.log(key, errorRespo.error.message[key]);

              this.listaError.push(errorRespo.error.message[key]);
            });

            }
           else{
            //console.log(errorRespo);
            //this.mensaje=errorRespo;
            this.listaError.push(errorRespo.error.message);
          }
        }
      );

     }
    }
  }
  btnCancelar(){
    this.mostarlistado.emit(true);
  }
}
