import { Component } from '@angular/core';
import { currencies as data } from '../../data/currency-display';
import { ICurrencyDisplay } from '../../models/currency-display';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  currencies: ICurrencyDisplay[] = data;
}
