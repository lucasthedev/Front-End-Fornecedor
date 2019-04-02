import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InserirFornecedorComponent } from './inserir-fornecedor/inserir-fornecedor.component';
import { ListarFornecedorComponent } from './listar-fornecedor/listar-fornecedor.component';

const routes: Routes = [
  {path: 'editar/:id', component: InserirFornecedorComponent},
  {
    path: 'novo', component: InserirFornecedorComponent
  },
  {
    path: 'listar', component: ListarFornecedorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
