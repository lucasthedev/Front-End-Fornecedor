import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cadastro de Fornecedores';

  tabInserir: boolean = false;
  tabListar: boolean = false;

 

  setTabInserir(){
    this.tabInserir = true;
    this.tabListar = false;
  }

  abaListar(){
    this.tabListar = true;
    this.tabInserir = false;
  }
}
