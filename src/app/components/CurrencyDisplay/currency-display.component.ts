import { Component, Input } from '@angular/core';
import { ICurrencyDisplay } from 'src/app/models/currency-display';

@Component({
  selector: 'app-currency-display',
  templateUrl: './currency-display.component.html',
  styleUrls: ['./currency-display.component.scss'],
})
export class CurrencyDisplay {
  @Input() currency: ICurrencyDisplay;
}
