import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaFisicaFormComponent } from './pessoa-fisica-form/pessoa-fisica-form.component';
import { PessoaFisicaListComponent } from './pessoa-fisica-list/pessoa-fisica-list.component';
import { PessoaJuridicaFormComponent } from './pessoa-juridica-form/pessoa-juridica-form.component';
import { PessoaJuridicaListComponent } from './pessoa-juridica-list/pessoa-juridica-list.component';

const routes: Routes = [
  {path: 'pessoaFisicaNew', component: PessoaFisicaFormComponent},
  {path: 'pessoaFisica', component: PessoaFisicaListComponent},
  {path: 'pessoaFisicaNew/:id', component: PessoaFisicaFormComponent},
  {path: 'pessoaJuridica', component: PessoaJuridicaListComponent},
  {path: 'pessoaJuridicaNew/:id', component: PessoaJuridicaFormComponent},
  {path: 'pessoaJuridicaNew', component: PessoaJuridicaFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
