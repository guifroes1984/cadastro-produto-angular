import { Produto } from './../../interfaces/Produto';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Categoria } from 'src/app/interfaces/Categoria';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit, OnChanges {

  @Input()
  categorias: Categoria [] = [];

  @Input()
  produto: Produto = {} as Produto;

  @Output()
  salvarEmitter = new EventEmitter();

  formGroupProduto: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroupProduto = this.formBuilder.group({
      id: [''],
      nome: [''],
      descricao: [''],
      categoria: [''],
      preco: [''],
      novoProduto: [''],
      promocao: ['']
    });
   }

  ngOnChanges(): void {
    if (this.produto.id) {
      this.formGroupProduto.setValue(this.produto);
    }
  }

  ngOnInit(): void {
  }

  salvar() {
    Object.assign(this.produto, this.formGroupProduto.value);
    this.salvarEmitter.emit(true);
  }

  cancelar() {
    this.salvarEmitter.emit(false);
  }

  selectedCategoria(categoria1: Categoria, categoria2: Categoria) {
    return categoria1 && categoria2 ? categoria1.id === categoria2.id : false;
  }

}
