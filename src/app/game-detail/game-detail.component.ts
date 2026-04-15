import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../service/game.service';
import { CommonModule } from '@angular/common';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-game-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-detail.component.html'
})
export class GameDetailComponent implements OnInit {

  game: any = null;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService
  ) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      map(params => Number(params.get('id'))),
      switchMap(id => {
        this.game = null; // ativa loading
        return this.gameService.getGameById(id);
      })
    ).subscribe({
      next: (data) => {
        this.game = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}