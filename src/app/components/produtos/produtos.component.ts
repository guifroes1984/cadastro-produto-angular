import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/interfaces/Categoria';
import { Produto } from 'src/app/interfaces/Produto';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  categorias: Categoria [] = [];

  produto: Produto = {} as Produto;
  produtos: Produto[] = [];

  constructor(private catergoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categorias = this.catergoriaService.getCategorias();
  }

  salvarProduto() {
    this.produto.id = this.produtos.length + 1;
    this.produtos.push(this.produto);
    this.produto = {} as Produto;

    console.log("Novo produto cadastrado. Total produtos: " + this.produtos.length);
  }

}
