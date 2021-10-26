import { Component, OnInit } from '@angular/core';
import { Contato } from '../model/contato';
import { ContatoService } from '../service/contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  contato:Contato = new Contato;

  constructor(private contatoService:ContatoService) { }

  ngOnInit(): void {
  }

  cadastrarContato() {
    console.log(this.contato)

    this.contatoService.postContato(this.contato).subscribe((data: Contato) => {
      this.contato = data
      location.assign('/contato')
      
    })
  }

}
