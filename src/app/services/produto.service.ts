import { Injectable } from '@angular/core';
import { Produto } from '../interfaces/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produtos: Produto[] = [];

  constructor() { }

  getProdutos(): Produto[] {
    return this.produtos;
  }

  salvar(produto: Produto) {
    produto.id = this.produtos.length + 1;
    this.produtos.push(produto);
  }

}
