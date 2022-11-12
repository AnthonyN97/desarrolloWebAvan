import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristica',
  templateUrl: './caracteristica.component.html',
  styleUrls: ['./caracteristica.component.css']
})
export class CaracteristicaComponent implements OnInit {

  @Output() caractProducto = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


  agregaCaract(value: string){
    this.caractProducto.emit(value);
  }

}
