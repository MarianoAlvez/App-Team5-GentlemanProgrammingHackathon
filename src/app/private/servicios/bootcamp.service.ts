import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from "@angular/common/http";
import { Bootcamp } from '../modelo/bootcamp';

@Injectable({
  providedIn: 'root'
})
export class BootcampService {

  urlBase: string;

  constructor(private http: HttpClient) {
    this.urlBase = "http://localhost:3000/";
  }
  agregarBootcamp(_bootcamp:Bootcamp) {

    return this.http.post<any>(this.urlBase + "api/bootcamp/agregar/",_bootcamp);

  }

  editarBootcamp(_bootcamp:Bootcamp) {

    return this.http.put<any>(this.urlBase + "api/bootcamp/actualizar/",_bootcamp);

  }

  obtenerBootcamp(_id:string) {

    return this.http.get<any>(this.urlBase + "api/bootcamp/entidad/?_id="+_id);

  }

  listarBootcamp() {
    return this.http.get<any[]>(this.urlBase + "api/bootcamp/lista").toPromise();
  }

}
