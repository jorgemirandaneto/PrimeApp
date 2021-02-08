import { PessoaJuridicaServiceService } from './pessoa-juridica-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-juridica-list',
  templateUrl: './pessoa-juridica-list.component.html',
  styleUrls: ['./pessoa-juridica-list.component.css']
})
export class PessoaJuridicaListComponent implements OnInit {

  pessoaJuridica: any[] = [];
  constructor(private service: PessoaJuridicaServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getPessoaJuridica()
  }
  
  getPessoaJuridica() {
    this.service.getPessoaJuridica().then(p => { this.pessoaJuridica = p })
  }

  btnIncluir() {
    this.router.navigate(['pessoaJuridicaNew']);
  }

  editarFinanceira(pessoa: any, instituicao: string){
    pessoa.instituicaoFinanceira = instituicao
    this.service.editarPessoaJuridica(pessoa).then(p => this.getPessoaJuridica())  
  }

}
