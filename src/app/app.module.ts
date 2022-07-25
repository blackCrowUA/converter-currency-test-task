import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurrencyDisplay } from './components/CurrencyDisplay/currency-display.component';
import { HeaderComponent } from './components/Header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CurrencyDisplay],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
