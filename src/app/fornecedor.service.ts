import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { InserirFornecedorComponent } from './inserir-fornecedor/inserir-fornecedor.component';

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
    console.log(fornecedor);
    return this.http.post(this.urlInserir,fornecedor, httpOptions);
  }

  constructor(private http: HttpClient) { }
}
