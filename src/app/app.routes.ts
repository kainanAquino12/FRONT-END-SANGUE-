import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Usuarios } from './pages/usuarios/usuarios';
import { Estoque } from './pages/estoque/estoque';
import { Doacao } from './pages/doacao/doacao';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'usuarios', component: Usuarios },
  { path: 'estoque', component: Estoque },
  { path: 'doacao', component: Doacao },
  { path: '**', redirectTo: 'dashboard' }
];