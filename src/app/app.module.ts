import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InflectionPointComponent } from './inflection-point/inflection-point.component';
import { MaxPriceComponent } from './max-price/max-price.component';

@NgModule({
  declarations: [
    AppComponent,
    InflectionPointComponent,
    MaxPriceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
