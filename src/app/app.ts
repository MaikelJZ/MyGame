import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameService } from './service/game.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('MyGame');

  constructor(private gameService: GameService) {}

  games: any[] = [];
  carregando = false;

  carregaJogos() {
    this.carregando = true;

    this.gameService.getGames().subscribe((data: any) => {
      const resultado = data.results;

      const shuffled = resultado.sort(() => 0.5 - Math.random());

      this.games = shuffled.slice(0, 20);

      this.carregando = false;
    });
  }

  ngOnInit() {
    this.carregaJogos(); // 👈 chama aqui
  }
}