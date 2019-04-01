import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InserirFornecedorComponent } from './inserir-fornecedor/inserir-fornecedor.component';
import { HttpClientModule }    from '@angular/common/http';
import { ListarFornecedorComponent } from './listar-fornecedor/listar-fornecedor.component';

@NgModule({
  declarations: [
    AppComponent,
    InserirFornecedorComponent,
    ListarFornecedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
