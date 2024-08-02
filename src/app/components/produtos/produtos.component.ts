import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/interfaces/Categoria';

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

  constructor() { }

  ngOnInit(): void {
  }
}
