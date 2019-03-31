import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirFornecedorComponent } from './inserir-fornecedor.component';

describe('InserirFornecedorComponent', () => {
  let component: InserirFornecedorComponent;
  let fixture: ComponentFixture<InserirFornecedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirFornecedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
