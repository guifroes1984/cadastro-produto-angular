import { Injectable } from '@angular/core';
import { Produto } from '../interfaces/Produto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>("http://localhost:8080/produtos");
  }

  salvar(produto: Produto) {
    return this.http.post<Produto>("http://localhost:8080/produtos", produto);
  }

}
