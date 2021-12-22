import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';

export const AuthRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {},
    resolve: {}
  },
  {
    path: 'register',
    component: LoginComponent,
    data: {},
    resolve: {}
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];
