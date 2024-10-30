import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  public contador:number = 10;

  sumarContador():void{
    this.contador += 1;
  }
  restarContador():void{
    this.contador -= 1;
  }
  formatearContador(){
    this.contador = 10;
  }

}
