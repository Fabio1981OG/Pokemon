import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-procurar-por-palavra',
  templateUrl: './procurar-por-palavra.component.html',
  styleUrls: ['./procurar-por-palavra.component.css']


})export class ProcurarPorPalavraComponent {

  procuraPalavra: string = '';

  @Output() search = new EventEmitter<string>();

  
}