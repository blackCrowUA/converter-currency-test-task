import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICurrentCurrency } from '../models/current-currency';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private http: HttpClient) {}

  //get all exchange rates from Monobank API
  getCurrency(): Observable<ICurrentCurrency[]> {
    return this.http.get<ICurrentCurrency[]>(
      'https://api.monobank.ua/bank/currency'
    );
  }
}
