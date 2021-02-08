import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaJuridicaFormComponent } from './pessoa-juridica-form.component';

describe('PessoaJuridicaFormComponent', () => {
  let component: PessoaJuridicaFormComponent;
  let fixture: ComponentFixture<PessoaJuridicaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoaJuridicaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaJuridicaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
