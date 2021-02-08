import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private url = environment.url;
  
  constructor(private http: HttpClient) { }

  getPessoaFisica() : Promise<any[]>{
    const url = `${this.url + 'ClientePessoaFisica'}`
    
    return this.http.get<any[]>(url, httpOptions).toPromise().then(pessoa => pessoa).catch(err=> err);
  }

  editarPessoaFisica(pessoaFisica: any){
    const url = `${this.url + 'ClientePessoaFisica'}`
    return this.http.put<any>(url, pessoaFisica ,httpOptions)
      .toPromise()
      .then(pessoa => pessoa)
      .catch(err => err)
  }
}
