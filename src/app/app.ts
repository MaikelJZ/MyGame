import { Component, OnInit,signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameService } from './service/game.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MyGame');

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService.getGames().subscribe(console.log);
  }
}
