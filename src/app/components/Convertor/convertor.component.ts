import { Component, OnInit } from '@angular/core';
import { CurrencyDataService } from 'src/app/services/currency-data.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-convertor',
  templateUrl: './convertor.component.html',
  styleUrls: ['./convertor.component.scss'],
})
export class ConvertorComponent implements OnInit {
  constructor(protected currencyData: CurrencyDataService) {}
  nodeType: any;

  firstSelected: number = 0;
  secondSelected: number = 0;

  firstValue: number = 0;
  secondValue: number = 0;

  ngOnInit(): void {
    this.nodeType = this.currencyData.currencies[0];
    if (this.currencyData.currencies.length >= 2) {
      this.firstSelected = this.currencyData.currencies[0].currencyCode;
      this.secondSelected = this.currencyData.currencies[1].currencyCode;
    }
  }
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
}
