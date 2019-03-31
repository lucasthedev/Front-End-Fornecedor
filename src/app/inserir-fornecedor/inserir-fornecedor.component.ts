import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

    //return this.http.post("url", this.fornecedor);

  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
