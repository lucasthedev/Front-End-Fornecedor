import { Component, OnInit, ViewChild } from '@angular/core';
import { FornecedorService } from '../fornecedor.service';
import { Fornecedor } from '../fornecedor';
import { Router, ActivatedRoute } from '@angular/router';
import { Alert } from 'selenium-webdriver';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from '../utilitarios/alert-modal/alert-modal.component';

@Component({
  selector: 'app-listar-fornecedor',
  templateUrl: './listar-fornecedor.component.html',
  styleUrls: ['./listar-fornecedor.component.css']
})
export class ListarFornecedorComponent implements OnInit {

  fornecedores: Fornecedor[];

  deleteModalRef: BsModalRef;

  @ViewChild('deleteModal') deleteModal;

  IdExcluir: number;

  constructor(private service: FornecedorService, private router: Router, private route: ActivatedRoute, private modalService: BsModalService) { }

  excluirFornecedor(id){
    this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});
    this.IdExcluir = id;
  }

  confirmarExclusao(): void {
    this.service.excluirFornecedor(this.IdExcluir).subscribe(
      success => {
              this.deleteModalRef.hide();
              this.msgSucesso();
              this.ngOnInit();
      },
      error => {
        this.msgErro()
      }
    );
  }
 
  cancelarExclusao(): void {
    this.deleteModalRef.hide();
  }

  msgErro(){
    this.deleteModalRef = this.modalService.show(AlertModalComponent);
    this.deleteModalRef.content.tipo = 'danger';
    this.deleteModalRef.content.mensagem = 'Ocorreu erro ao excluir o fornececdor';
  }

  msgSucesso(){
    this.deleteModalRef = this.modalService.show(AlertModalComponent);
    this.deleteModalRef.content.tipo = 'success';
    this.deleteModalRef.content.mensagem = 'Fornecedor excluído com sucesso.';
  }

  editarFornecedor(id){
    this.router.navigate(['/editar',id], { relativeTo: this.route });
  }

  ngOnInit() {
    this.service.listarFornecedores()
      .subscribe(dados => this.fornecedores = dados);
  }

}
