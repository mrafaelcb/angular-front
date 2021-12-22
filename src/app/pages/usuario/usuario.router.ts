import {Routes} from '@angular/router';
import {UsuarioFormComponent} from './usuario-form/usuario-form.component';
import {UsuarioListComponent} from './usuario-list/usuario-list.component';
import {AuthGuard} from "../../shared/security/auth.guard";

export const UsuarioRoutes: Routes = [
  {
    path: 'new',
    component: UsuarioFormComponent,
    data: {
      acao: 'new',
    },
    canActivate: [

    ],
    resolve: {}
  },
  {
    path: ':id/edit',
    component: UsuarioFormComponent,
    data: {
      acao: 'edit',
    },
    resolve: {}
  },
  {
    path: ':id/details',
    component: UsuarioFormComponent,
    data: {
      acao: 'details',
    },
    resolve: {},
    canActivate: [
      AuthGuard
    ],
  },
  {
    path: 'list',
    component: UsuarioListComponent,
    data: {},
    resolve: {},
    canActivate: [
      AuthGuard
    ],
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];
