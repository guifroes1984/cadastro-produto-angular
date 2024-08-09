import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  deleteProduto: Produto = {} as Produto;
  produtos: Produto[] = [];

  showForm: boolean = false;

  estaEditando: boolean = false;

  constructor(
    private catergoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.carregarProdutos();
    this.carregarCategorias();
  }

  carregarProdutos() {
    this.produtoService.getProdutos().subscribe({
      next: data => {this.produtos = data}
    });
  }

  carregarCategorias() {
    this.catergoriaService.getCategorias().subscribe({
      next: data => {this.categorias = data}
    });
  }

  salvarProduto(salvar: boolean) {
    if (salvar) {
      if (this.estaEditando) {
        this.produtoService.atualizar(this.produto).subscribe();
      } else {
        this.produtoService.salvar(this.produto).subscribe({
          next: data => {
            this.produtos.push(data);
          }
        });
      }
    }
    this.produto = {} as Produto;
    this.showForm = false;
    this.estaEditando = false;
  }

  criar() {
    this.showForm = true;
  }

  editar(produto: Produto) {
    this.produto = produto;
    this.showForm = true;
    this.estaEditando = true;
  }

  delete(modal: any, produto: Produto) {
    this.deleteProduto = produto;
    this.modalService.open(modal).result.then(
      (confirma) => {
        if (confirma) {
          this.produtoService.delete(produto).subscribe({
            next: () => {
              this.produtos = this.produtos.filter(p => p.id !== produto.id);
            }
          });
        }
      }
    );
  }

}
