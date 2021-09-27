import { LocalizedString } from "@angular/compiler";

export interface Bootcamp{

    empresa: string,
    fecha:Date,
    titulo: string,
    descripcion: string,
    fecRegistro:Date,
    Programador:boolean,
    Analista:boolean,
    AnalistaPruebas:boolean,
    JefeProyectos:boolean,
    Ingenieros:boolean,
    Otros:boolean
}
