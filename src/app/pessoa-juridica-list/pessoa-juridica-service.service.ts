import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class PessoaJuridicaServiceService {
  private url = environment.url;
  pessoaFisica: any[] = [];

  constructor(private http: HttpClient) { }

  getPessoaJuridica() : Promise<any[]>{
    const url = `${this.url + 'ClientePessoaJuridica'}`
    
    return this.http.get<any[]>(url, httpOptions).toPromise().then(pessoa => pessoa).catch(err=> err);
  }


  editarPessoaJuridica(pessoaJuridica: any){
    const url = `${this.url + 'ClientePessoaJuridica'}`
    return this.http.put<any>(url, pessoaJuridica ,httpOptions)
      .toPromise()
      .then(pessoa => pessoa)
      .catch(err => err)
  }
}
