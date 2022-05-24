import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  codigoRMA: number = 4156;
  nome: string = "Caio";
  nota1: number = 10;
  nota2: number = 10;
  nota3: number = 3;
  nota4: number = 5;
  media: number = (this.nota1+this.nota2+this.nota3+this.nota4)/4;
  data: string = "2021-07-01";
  imagem: string = 'assets/img/caiofoto.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
