import { Component, ViewChild } from '@angular/core';
import { Producto } from './producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor() {
    
  }

  title = 'Tiendita de Nova';
  productos:Producto[]=[];

  agregarProducto(){
    let miProducto = new Producto(this.cuadroNombre,this.cuadroPrecio, this.cuadroCategoria);
    this.productos.push(miProducto);
  }

  cuadroNombre:string="";
  cuadroPrecio:number=0;
  cuadroCategoria:string="";
 
}