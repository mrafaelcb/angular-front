import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HomeRoutes} from './home.router';
import { HomeWelcomeComponent } from './home-welcome/home-welcome.component';
import {FlexModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";


@NgModule({
  declarations: [
    HomeWelcomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    FlexModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressBarModule
  ]
})
export class HomeModule {
}
