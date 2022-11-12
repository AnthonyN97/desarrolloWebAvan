import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../producto.model';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() productoDeLista:Producto;

  @Input() indice:number;

  constructor() { }

  ngOnInit(): void {
  }

}
