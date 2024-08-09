import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  ngOnInit(): void {
  }

  salvar() {
    this.salvarEmitter.emit(true);
  }

  cancelar() {
    this.salvarEmitter.emit(false);
  }

  selectedCategoria(categoria1: Categoria, categoria2: Categoria) {
    return categoria1 && categoria2 ? categoria1.id === categoria2.id : false;
  }

}
