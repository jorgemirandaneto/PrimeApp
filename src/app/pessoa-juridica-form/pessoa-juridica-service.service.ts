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

  constructor(private http: HttpClient) { }


  addPessoaJuridica(pessoaJuridica: any): Promise<any>{
    pessoaJuridica.id = 0;
    const url = `${this.url + 'ClientePessoaJuridica'}`
    return this.http.post<any>(url, pessoaJuridica ,httpOptions)
      .toPromise()
      .then(pessoa => pessoa)
      .catch(err => err)
  }

  getPessoaJuridica(id: string): Promise<any>{
    const url = `${this.url + 'ClientePessoaJuridica/'+ id}`
    return this.http.get(url, httpOptions)
      .toPromise()
      .then(pessoa => pessoa)
      .catch(pessoa => pessoa)
  }

  editarPessoaJuridica(pessoaJuridica: any){
    const url = `${this.url + 'ClientePessoaJuridica'}`
    return this.http.put<any>(url, pessoaJuridica ,httpOptions)
      .toPromise()
      .then(pessoa => pessoa)
      .catch(err => err)
  }
}
