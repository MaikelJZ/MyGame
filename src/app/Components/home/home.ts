

import { Component, OnInit } from '@angular/core';
import { GameService } from '../../service/game.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html'

})
export class HomeComponent implements OnInit {

  games: any[] = [];
  carregando = false;

  constructor(private gameService: GameService) {}

   carregaJogos() {
    this.carregando = true;

    this.gameService.pegaJogos().subscribe((data: any) => {
      const resultado = data.results;

      const shuffled = resultado.sort(() => 0.5 - Math.random());

      this.games = shuffled.slice(0, 20);
    this.carregando = false;
    });
  }

  ngOnInit() {
    this.carregaJogos();
  }
}