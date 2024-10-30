import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  elementoBorrado:any = ''
  heroesName: string[] = ['SpiderMan', 'IronMan', 'SuperMan', 'BatMan', 'MujerMaravilla', 'Hulk'];

  removeLastHeroe():void{
    this.elementoBorrado = this.heroesName.pop();
    console.log('El elemnto borrado fue', this.elementoBorrado)
  }

}
