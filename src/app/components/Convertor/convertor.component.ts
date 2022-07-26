import { Component, OnInit } from '@angular/core';
import { CurrencyDataService } from 'src/app/services/currency-data.service';
import { UAH } from 'src/app/data/currency-display';

@Component({
  selector: 'app-convertor',
  templateUrl: './convertor.component.html',
  styleUrls: ['./convertor.component.scss'],
})
export class ConvertorComponent implements OnInit {
  constructor(protected currencyData: CurrencyDataService) {}
  firstCurrency = UAH;

  selectedCurrencyCode: number = 0;

  firstValue: number = 0;
  secondValue: number = 0;

  ngOnInit(): void {
    this.selectedCurrencyCode = this.currencyData.currencies[0].currencyCode;
  }

  onFirstValueChange(value: number) {
    if (value == null) {
      return;
    }
    this.firstValue = value;

    let currentCurrency = this.currencyData.currencies.find(
      (x) => x.currencyCode === this.selectedCurrencyCode
    );

    //get choosed currency
    if (currentCurrency?.buyPrice != null) {
      this.secondValue = this.firstValue / currentCurrency.buyPrice;
    }
  }

  onSecondValueChange(value: number) {
    if (value == null) {
      return;
    }
    this.secondValue = value;

    //get choosed currency
    let currentCurrency = this.currencyData.currencies.find(
      (x) => x.currencyCode === this.selectedCurrencyCode
    );

    if (currentCurrency?.buyPrice != null) {
      this.firstValue = this.secondValue * currentCurrency.buyPrice;
    }
  }

  onSecondCurrencyChange(data: any) {
    this.selectedCurrencyCode = data.value;
    this.onSecondValueChange(this.secondValue);
  }
}
