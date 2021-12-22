import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsuarioListComponent} from './usuario-list/usuario-list.component';
import {UsuarioFormComponent} from './usuario-form/usuario-form.component';
import {RouterModule} from '@angular/router';
import {UsuarioRoutes} from './usuario.router';
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {FlexModule} from "@angular/flex-layout";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {NgxMaskModule} from "ngx-mask";
import {MomentModule} from "ngx-moment";

const MATERIAL_MODULES = [
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatSnackBarModule,
  MatTableModule,
  MatCardModule,
  MatPaginatorModule
];

@NgModule({
  declarations: [
    UsuarioListComponent,
    UsuarioFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(UsuarioRoutes),
    MATERIAL_MODULES,
    FlexModule,
    NgxMaskModule,
    MomentModule,
  ]
})
export class UsuarioModule {
}
