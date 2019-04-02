import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InserirFornecedorComponent } from './inserir-fornecedor/inserir-fornecedor.component';
import { HttpClientModule }    from '@angular/common/http';
import { ListarFornecedorComponent } from './listar-fornecedor/listar-fornecedor.component';
import { UtilitariosModule } from './utilitarios/utilitarios.module';

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
    HttpClientModule,
    ModalModule.forRoot(),
    UtilitariosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
