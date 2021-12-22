import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "../shared/component/not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    resolve: {},
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(module => module.HomeModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule)
      },
      {
        path: 'user',
        loadChildren: () => import('./usuario/usuarios.module').then(module => module.UsuarioModule)
      },
    ],
  },
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
