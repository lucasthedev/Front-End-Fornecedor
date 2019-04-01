import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { InserirFornecedorComponent } from './inserir-fornecedor/inserir-fornecedor.component';
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

  constructor(private http: HttpClient) { }
}
