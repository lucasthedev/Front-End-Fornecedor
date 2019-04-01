import { Component, OnInit } from '@angular/core';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-inserir-fornecedor',
  templateUrl: './inserir-fornecedor.component.html',
  styleUrls: ['./inserir-fornecedor.component.css']
})
export class InserirFornecedorComponent implements OnInit {

  fornecedor: any ={
    nome: '',
    email: '',
    comentario: '',
    cnpj: ''
  }

  onSubmit(form){
    console.log(form);
    console.log(this.fornecedor);

    this.service.inserirFornecedor(this.fornecedor).subscribe(
      success => {
        alert("Fornecedor inserido com sucesso.");
    },
      error => alert("Erro ao inserir o Fornecedor.")
    );

  }

  constructor(private service: FornecedorService) { }

  ngOnInit() {
  }

}
