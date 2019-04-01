import { Component, OnInit } from '@angular/core';
import { FornecedorService } from '../fornecedor.service';
import { Fornecedor } from '../fornecedor';

@Component({
  selector: 'app-listar-fornecedor',
  templateUrl: './listar-fornecedor.component.html',
  styleUrls: ['./listar-fornecedor.component.css']
})
export class ListarFornecedorComponent implements OnInit {

  fornecedores: Fornecedor[];

  constructor(private service: FornecedorService) { }


  ngOnInit() {
    this.service.listarFornecedores()
      .subscribe(dados => this.fornecedores = dados);
  }

}
