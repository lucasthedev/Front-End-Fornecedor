import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-fornecedor',
  templateUrl: './listar-fornecedor.component.html',
  styleUrls: ['./listar-fornecedor.component.css']
})
export class ListarFornecedorComponent implements OnInit {

  fornecedor: any ={
    nome: '',
    email: '',
    comentario: '',
    cnpj: ''
  }

  constructor() { }

  ngOnInit() {
  }

}