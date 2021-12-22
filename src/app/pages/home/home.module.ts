import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HomeRoutes} from './home.router';
import { HomeWelcomeComponent } from './home-welcome/home-welcome.component';


@NgModule({
  declarations: [
    HomeWelcomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes)
  ]
})
export class HomeModule {
}
