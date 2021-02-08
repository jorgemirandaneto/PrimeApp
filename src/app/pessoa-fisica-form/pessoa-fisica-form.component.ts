import { PessoaFisicaServiceService } from './pessoa-fisica-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pessoa-fisica-form',
  templateUrl: './pessoa-fisica-form.component.html',
  styleUrls: ['./pessoa-fisica-form.component.css']
})
export class PessoaFisicaFormComponent implements OnInit {
  status : string;
  
  pessoaFisica = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(''),
    cpf: new FormControl(''),
    dataCriacao: new FormControl(new Date()),
    telefone: new FormControl(''),
    instituicaoFinanceira: new FormControl(''),
  })

  constructor(private service : PessoaFisicaServiceService, private route: ActivatedRoute) { 
    this.status = '';
   }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if(id != null){
      this.status = 'edicao'
      this.service.getPessoaFisica(id).then(p => this.pessoaFisica.setValue(p))
    }
  }

  onSubmit(){
    if(this.pessoaFisica.value.id > 0){
      this.service.editarPessoaFisica(this.pessoaFisica.value).then(p => this.pessoaFisica.reset()), alert('Salvo com sucesso!');
    }
    else{
      this.service.addPessoaFisica(this.pessoaFisica.value).then(p => this.pessoaFisica.reset()), alert('Salvo com sucesso!');
    }  
  }
}
