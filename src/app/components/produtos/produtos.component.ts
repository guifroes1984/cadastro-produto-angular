import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/interfaces/Categoria';
import { Produto } from 'src/app/interfaces/Produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  categorias: Categoria [] = [
    {id: 1, nome: "Produção Própria"},
    {id: 2, nome: "Nacional"},
    {id: 3, nome: "Importado"},
    {id: 4, nome: "Premium"},
  ];

  produto: Produto = {} as Produto;
  produtos: Produto[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  salvarProduto() {
    this.produto.id = this.produtos.length + 1;
    this.produtos.push(this.produto);
    this.produto = {} as Produto;

    console.log("Novo produto cadastrado. Total produtos: " + this.produtos.length);
  }

}
