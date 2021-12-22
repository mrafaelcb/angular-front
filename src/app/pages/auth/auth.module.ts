import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RouterModule} from '@angular/router';
import {AuthRoutes} from './auth.router';
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {NgxMaskModule} from "ngx-mask";
import {AuthClientService} from "./shared/auth-client.service";
import {MatSnackBarModule} from "@angular/material/snack-bar";

const MATERIAL_MODULES = [
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatSnackBarModule,
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(AuthRoutes),
    FlexLayoutModule,
    MATERIAL_MODULES,
    NgxMaskModule,
  ],
  providers:[
    AuthClientService,
  ]
})
export class AuthModule {
}
