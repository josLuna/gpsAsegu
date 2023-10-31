import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  hola(){
    console.log("hola mundo")
  }
}
