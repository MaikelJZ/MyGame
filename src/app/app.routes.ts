import { Routes } from '@angular/router';
import { GameDetailComponent } from './Components/game-detail/game-detail.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./Components/home/home').then(m => m.HomeComponent)
  },
  {
    path: 'game/:id',
    component: GameDetailComponent
  }
];