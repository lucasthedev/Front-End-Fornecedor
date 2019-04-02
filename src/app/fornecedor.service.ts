import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Fornecedor } from './fornecedor';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': '',
    'Access-Control-Allow-Origin': '*'
  })
};

httpOptions.headers.set("Access-Control-Allow-Origin","*");

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  urlInserir: string = 'http://localhost:8080/Fornec/rest/FornecedorController/inserirFornecedor';

  inserirFornecedor(fornecedor: any){
    return this.http.post(this.urlInserir,fornecedor, httpOptions);
  }

  urlListar: string = 'http://localhost:8080/Fornec/rest/FornecedorController/listarFornecedores';

  listarFornecedores(){
    return this.http.get<Fornecedor[]>(this.urlListar,httpOptions);
  }

  urlEditar: string = 'http://localhost:8080/Fornec/rest/FornecedorController/alterarFornecedor';
  editarFornecedor(fornecedor: any){
    return this.http.put(this.urlEditar,fornecedor,httpOptions);
  }

  urlSelecionarFornec: string = 'http://localhost:8080/Fornec/rest/FornecedorController/obterFornecedor/';
  selecionarFornecedorById(id){
    return this.http.get<Fornecedor>(this.urlSelecionarFornec+id, httpOptions);
  }

  urlExcluirFornec: string = 'http://localhost:8080/Fornec/rest/FornecedorController/excluirFornecedor/';
  excluirFornecedor(id){
    return this.http.delete(this.urlExcluirFornec+id, httpOptions);
  }

  constructor(private http: HttpClient) { }
}
