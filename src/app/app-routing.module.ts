import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { CategoriasComponent } from './categorias/categorias.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'produto', component: ProdutosComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
