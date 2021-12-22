import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutsModule} from './layouts/layouts.module';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {FormsModule} from "@angular/forms";
import {NgxMaskModule} from "ngx-mask";
import {HttpClientModule} from "@angular/common/http";

const MATERIAL_MODULES = [
  MatCardModule,
  MatProgressBarModule,
]

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    LayoutsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexModule,
    FormsModule,
    MATERIAL_MODULES,
    HttpClientModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
