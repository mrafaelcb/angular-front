import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layouts/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    resolve: {},
    loadChildren: () => import('./pages/pages.module').then(module => module.PagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
