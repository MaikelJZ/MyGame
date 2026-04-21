import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../../service/game.service';
import { CommonModule } from '@angular/common';
import { switchMap, map } from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core';



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
    private gameService: GameService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      map(params => Number(params.get('id'))),
      switchMap(id => {
        this.game = null; // ativa loading
        return this.gameService.jogoPorId(id);
      })
    ).subscribe({
      next: (data) => {
        this.game = data;
        this.cd.detectChanges();//Força Recarregar a página para mostrar os dados do jogo
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  mostrarCompleto: boolean = false;

alternarDescricao() {
  this.mostrarCompleto = !this.mostrarCompleto;
}

pegaDescricao(descricao: string): string {
  if (!this.mostrarCompleto && descricao.length > 300) {
    return descricao.substring(0, 300) + '...';
  }
  return descricao;
}
}