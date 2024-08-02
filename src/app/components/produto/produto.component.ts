import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from 'src/app/interfaces/Categoria';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  @Input()
  categorias: Categoria [] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
