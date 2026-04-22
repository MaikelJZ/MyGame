

import { Component, OnInit } from '@angular/core';
import { GameService } from '../../service/game.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html'

})
export class HomeComponent implements OnInit {

  games: any[] = [];
  carregando = false;
  total = 0;
  page = 1;
  pageSize = 40;

  constructor(private gameService: GameService) { }

  carregaJogos() {
    this.carregando = true;

    this.gameService.pegaJogos(this.page, this.pageSize)
    .pipe(timeout(5000))
      .subscribe({
        next: (data: any) => {
          this.games = data.results;
          this.total = data.count;
          this.carregando = false;
        },
        error: (err) => {
          this.carregando = false;
        }
      });
  }

  proximaPagina() {
    this.page++;
    this.carregaJogos();
  }

  paginaAnterior() {
    if (this.page > 1) {
      this.page--;
      this.carregaJogos();
    }
  }

  ngOnInit() {
    this.carregaJogos();
    console.log('Buscando jogos...', this.page);
  }
}


