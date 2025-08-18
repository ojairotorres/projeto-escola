// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { authGuard } from './core/guards/auth.guard';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
  path: 'dashboard',
  component: DashboardComponent,
  canActivate: [authGuard],
  children: [
    {
      path: 'modalidades',
      children: [
        {
          path: 'cadastrar',
          loadComponent: () =>
            import('./modalidades/modalidade-form/modalidade-form.component')
              .then(m => m.ModalidadeFormComponent)
        }
      ]
    }
  ]
},
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];
