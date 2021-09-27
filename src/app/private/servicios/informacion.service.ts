import { Injectable,Output,EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
//import { Component, OnInit,AfterViewInit, ViewChild,Output,EventEmitter} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  @Output() disparadorInformacion: EventEmitter<string> = new EventEmitter<string>();

  private sharedObservablePrivate:BehaviorSubject<string>=new BehaviorSubject<string>("0");
  constructor() { }

  get sharingObservable(){
    return this.sharedObservablePrivate.asObservable();
   }

   set sharingObservableData(data:string){
     this.sharedObservablePrivate.next(data);
   }
}
