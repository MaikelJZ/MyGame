import { Routes } from '@angular/router';
import { GameDetailComponent } from './game-detail/game-detail.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.HomeComponent)
  },
  {
    path: 'game/:id',
    component: GameDetailComponent
  }
];