import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/post';
import { Contato } from '../model/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private http: HttpClient) { }

  getContatos() {
    return this.http.get('http://localhost:3000/contatos')
  }

  postContato(contato: Contato) {
    return this.http.post('http://localhost:3000/contatos', contato)
  }

  getPorNome(nome: string) {
    return this.http.get('http://localhost:3000/contatos?nome='+nome);
  }

}
