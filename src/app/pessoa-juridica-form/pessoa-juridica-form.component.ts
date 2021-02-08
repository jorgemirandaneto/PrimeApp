import { PessoaJuridicaServiceService } from './pessoa-juridica-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pessoa-juridica-form',
  templateUrl: './pessoa-juridica-form.component.html',
  styleUrls: ['./pessoa-juridica-form.component.css']
})
export class PessoaJuridicaFormComponent implements OnInit {
  status : string;
  
  pessoaJuridica = new FormGroup({
    id: new FormControl(),
    uf : new FormControl(''),
    cnpj: new FormControl(''),
    nomeFantasia: new FormControl(''),
    instituicaoFinanceira: new FormControl(''),
  })

  constructor(private service : PessoaJuridicaServiceService, private route: ActivatedRoute) { 
    this.status = '';
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if(id != null){
      this.status = 'edicao'
      this.service.getPessoaJuridica(id).then(p => this.pessoaJuridica.setValue(p))
    }
  }

  onSubmit(){
    if(this.pessoaJuridica.value.id > 0){
      this.service.editarPessoaJuridica(this.pessoaJuridica.value).then(p => this.pessoaJuridica.reset()), alert('Salvo com sucesso!');
    }
    else{
      this.service.addPessoaJuridica(this.pessoaJuridica.value).then(p => this.pessoaJuridica.reset()), alert('Salvo com sucesso!');
    }  
  }

}
