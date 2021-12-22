import {Routes} from '@angular/router';
import {UsuarioFormComponent} from './usuario-form/usuario-form.component';
import {UsuarioListComponent} from './usuario-list/usuario-list.component';

export const UsuarioRoutes: Routes = [
  {
    path: 'new',
    component: UsuarioFormComponent,
    data: {
      acao: 'new',
    },
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
    resolve: {}
  },
  {
    path: 'list',
    component: UsuarioListComponent,
    data: {},
    resolve: {}
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];
