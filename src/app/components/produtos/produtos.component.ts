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

  constructor() { }

  ngOnInit(): void {
  }
}
