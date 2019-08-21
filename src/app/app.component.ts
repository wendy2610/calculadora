import { Component } from '@angular/core';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora-ultima';
  numero1:any;
  numero2:any;
  rta:any;

  Suma(){
    this.rta=this.numero1+this.numero2;
  }
  Resta(){
    this.rta=this.numero1-this.numero2;
  }
  Multiplicacion(){
    this.rta=this.numero1*this.numero2;
  }
  Division(){
    if(this.numero2==0){
    alert("No se permite division por cero")
    return null;
   }
    else {
      this.rta = this.numero1/this.numero2;
    }
  }
  Modulo(){
    this.rta=this.numero1%this.numero2;
  }
  Reset(){
    this.rta='';
    this.numero1='';
    this.numero2='';
  }
}
