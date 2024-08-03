import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/interfaces/Categoria';
import { Produto } from 'src/app/interfaces/Produto';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  categorias: Categoria [] = [];

  produto: Produto = {} as Produto;
  produtos: Produto[] = [];

  constructor(
    private catergoriaService: CategoriaService,
    private produtoService: ProdutoService) { }

  ngOnInit(): void {

    this.catergoriaService.getCategorias().subscribe({
      next: data => {this.categorias = data}
    });

    this.produtoService.getProdutos().subscribe({
      next: data => {this.produtos = data}
    });
  }

  salvarProduto() {
    this.produtoService.salvar(this.produto).subscribe({
      next: data => {
        this.produtos.push(data);
        this.produto = {} as Produto;
      }
    });
  }

}
