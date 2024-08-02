import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { FooterComponent } from './components/footer/footer.component';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProdutoComponent,
    ProdutosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
