import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CurrencyDisplay } from './components/CurrencyDisplay/currency-display.component';
import { HeaderComponent } from './components/Header/header.component';
import { MainLayoutComponent } from './components/MainLayout/main-layout.component';
import { ConvertorComponent } from './components/Convertor/convertor.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrencyDisplay,
    MainLayoutComponent,
    ConvertorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
