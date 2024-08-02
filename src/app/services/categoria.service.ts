import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categorias: Categoria [] = [
    {id: 1, nome: "Produção Própria"},
    {id: 2, nome: "Nacional"},
    {id: 3, nome: "Importado"},
    {id: 4, nome: "Premium"},
  ];

  constructor() { }

  getCategorias(): Categoria[] {
    return this.categorias;
  }

}
