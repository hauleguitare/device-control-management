import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../modules/auth-dashboard/auth-dashboard.component').then(m => m.AuthDashboardComponent)
  }
];
