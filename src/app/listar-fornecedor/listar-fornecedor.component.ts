import { Component, OnInit } from '@angular/core';
import { FornecedorService } from '../fornecedor.service';
import { Fornecedor } from '../fornecedor';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-fornecedor',
  templateUrl: './listar-fornecedor.component.html',
  styleUrls: ['./listar-fornecedor.component.css']
})
export class ListarFornecedorComponent implements OnInit {

  fornecedores: Fornecedor[];

  constructor(private service: FornecedorService, private router: Router, private route: ActivatedRoute) { }


  editarFornecedor(id){
    this.router.navigate(['/editar',id], { relativeTo: this.route });
  }

  ngOnInit() {
    this.service.listarFornecedores()
      .subscribe(dados => this.fornecedores = dados);
  }

}
