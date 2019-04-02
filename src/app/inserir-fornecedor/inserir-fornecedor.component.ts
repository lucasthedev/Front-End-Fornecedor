import { Component, OnInit } from '@angular/core';
import { FornecedorService } from '../fornecedor.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from '../utilitarios/alert-modal/alert-modal.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inserir-fornecedor',
  templateUrl: './inserir-fornecedor.component.html',
  styleUrls: ['./inserir-fornecedor.component.css']
})
export class InserirFornecedorComponent implements OnInit {

  fornecedor: any ={
    id: null,
    nome: '',
    email: '',
    comentario: '',
    cnpj: ''
  }

  Id: number = null;

  bsModalRef: BsModalRef;

  salvarForm(){

    if (this.Id != null){
      this.service.editarFornecedor(this.fornecedor).subscribe(
        success => {
          this.msgSucessoAlteracao();
          var formulario = document.getElementsByTagName("form");
          formulario[0].reset();
          this.Id = null;
        }
      );
    }else{
      this.service.inserirFornecedor(this.fornecedor).subscribe(
        success => {
          this.msgSucesso();
          var formulario = document.getElementsByTagName("form");
          formulario[0].reset();
      },
        error => this.msgErro()
      );
    }
    
  }

  msgErro(){
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.tipo = 'danger';
    this.bsModalRef.content.mensagem = 'Ocorreu erro ao inserir o fornececdor';
  }

  msgSucesso(){
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.tipo = 'success';
    this.bsModalRef.content.mensagem = 'Fornecedor inserido com sucesso.';
  }

  msgSucessoAlteracao(){
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.tipo = 'success';
    this.bsModalRef.content.mensagem = 'Fornecedor alterado com sucesso.';
  }


  constructor(private service: FornecedorService, private modalService: BsModalService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) =>{
        const id = params['id'];
        console.log(id);
        this.Id = id;
        if(id > 0){
          const fornecedor$ = this.service.selecionarFornecedorById(id)
          fornecedor$.subscribe(fornecedor =>{
            this.popularForm(fornecedor);
            }
          );
        }
      }
    );
  }

  popularForm(fornecedor){
    this.fornecedor.id = fornecedor.id;
    this.fornecedor.nome = fornecedor.nome;
    this.fornecedor.email = fornecedor.email;
    this.fornecedor.comentario = fornecedor.comentario;
    this.fornecedor.cnpj = fornecedor.cnpj;
  }

}
