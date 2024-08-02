import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from 'src/app/interfaces/Categoria';
import { Produto } from 'src/app/interfaces/Produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  @Input()
  categorias: Categoria [] = [];

  @Input()
  produto?: Produto

  constructor() { }

  ngOnInit(): void {
  }

  salvar() {
    console.log(this.produto);
  }

}
