export class Producto{
    
    constructor(nombre:string, precio: number, categoria:string){
        this.nombre=nombre;
        this.precio=precio;
        this.categoria=categoria;
    }

    nombre:string="";
    precio:number=0;
    categoria:string="";

}