import { Component, OnInit, OnDestroy } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';
import { currencies as data } from '../../data/currency-display';
import { ICurrencyDisplay } from '../../models/currency-display';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(private currencyService: CurrencyService) {}
  currencies: ICurrencyDisplay[] = data;
  intervalId: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.updateCurrentCurrency();
    // set interval to update exchange rates
    this.intervalId = setInterval(this.updateCurrentCurrency, 310000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  updateCurrentCurrency() {
    this.currencyService.getCurrency().subscribe((response) => {
      this.currencies.map((obj, index) => {
        // find needed currency
        let currency = response.find(
          (currency) => currency.currencyCodeA == obj.currencyCode
        );

        // set values
        this.currencies[index].buyPrice = currency?.rateBuy;
        this.currencies[index].sellPrice = currency?.rateSell;
      });
    });
  }
}
