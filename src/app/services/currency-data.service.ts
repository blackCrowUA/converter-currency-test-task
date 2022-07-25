import { Injectable } from '@angular/core';
import { currencies as data } from '../data/currency-display';
import { ICurrencyDisplay } from '../models/currency-display';

@Injectable({
  providedIn: 'root',
})
export class CurrencyDataService {
  currencies: ICurrencyDisplay[] = data;
}
