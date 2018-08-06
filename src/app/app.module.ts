import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { IncreaseComponent } from './increase/increase.component';
import { ShipListComponent } from './ship-list/ship-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http/';
import { ComcatComponent } from './comcat/comcat.component';

@NgModule({
  declarations: [
    AppComponent,
    IncreaseComponent,
    ShipListComponent,
    ComcatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
