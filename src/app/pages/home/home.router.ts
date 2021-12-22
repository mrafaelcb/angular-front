import {Routes} from '@angular/router';
import {HomeWelcomeComponent} from './home-welcome/home-welcome.component';

export const HomeRoutes: Routes = [
  {
    path: '',
    component: HomeWelcomeComponent,
    data: {},
    resolve: {}
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
