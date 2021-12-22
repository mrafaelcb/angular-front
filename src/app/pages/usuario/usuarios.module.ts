import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsuarioListComponent} from './usuario-list/usuario-list.component';
import {UsuarioFormComponent} from './usuario-form/usuario-form.component';
import {RouterModule} from '@angular/router';
import {UsuarioRoutes} from './usuario.router';


@NgModule({
  declarations: [
    UsuarioListComponent,
    UsuarioFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(UsuarioRoutes)
  ]
})
export class UsuarioModule {
}
