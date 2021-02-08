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
export class PessoaFisicaServiceService {

  private url = environment.url;
  constructor(private http: HttpClient) { }

  addPessoaFisica(pessoaFisica: any): Promise<any>{
    pessoaFisica.id = 0;
    const url = `${this.url + 'ClientePessoaFisica'}`
    return this.http.post<any>(url, pessoaFisica ,httpOptions)
      .toPromise()
      .then(pessoa => pessoa)
      .catch(err => err)
  }

  getPessoaFisica(id: string): Promise<any>{
    const url = `${this.url + 'ClientePessoaFisica/'+ id}`
    return this.http.get(url, httpOptions)
      .toPromise()
      .then(pessoa => pessoa)
      .catch(pessoa => pessoa)
  }

  editarPessoaFisica(pessoaFisica: any){
    const url = `${this.url + 'ClientePessoaFisica'}`
    return this.http.put<any>(url, pessoaFisica ,httpOptions)
      .toPromise()
      .then(pessoa => pessoa)
      .catch(err => err)
  }
}
