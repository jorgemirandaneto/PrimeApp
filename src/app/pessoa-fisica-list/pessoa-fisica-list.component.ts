import { ServiceService } from './service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-fisica-list',
  templateUrl: './pessoa-fisica-list.component.html',
  styleUrls: ['./pessoa-fisica-list.component.css']
})
export class PessoaFisicaListComponent implements OnInit {
  pessoaFisica: any[] = [];

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getPessoaFisica();
  }

  getPessoaFisica() {
    this.service.getPessoaFisica().then(p => { this.pessoaFisica = p })
  }

  btnIncluir() {
    this.router.navigate(['pessoaFisicaNew']);
  }

  editarFinanceira(pessoa: any, instituicao: string){
    pessoa.instituicaoFinanceira = instituicao
    this.service.editarPessoaFisica(pessoa).then(p => this.getPessoaFisica())  
  }
}
