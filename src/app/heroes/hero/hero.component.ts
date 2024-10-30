import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-super-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  nombre: string = 'Spiderman'
  edad  : number = 26

  get capitalizedName():string{
    return this.nombre.toUpperCase();
  }

  getHeroeDescription():string{
    return `${this.nombre} - ${this.edad}`;
  }

  changeNameHeroe():void{
    this.nombre = 'Hombre Araña'
  }

  changeAgeHeroe():void{
    this.edad = 23
  }

  restablecerFormulario(){
    this.nombre = 'Spiderman'
    this.edad = 26
  }
}
