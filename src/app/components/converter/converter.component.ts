import { Component } from '@angular/core';
import { ConversionService } from 'src/app/services/conversion.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
export class ConverterComponent {
  constructor(private conversionService: ConversionService) {}
  amount!: number;
  targetCurrency!: string;
  baseCurrency!: string;
  error: boolean = false;
  disableConvertButton: boolean = true;
  conversionResult: string = '0.0';

  exchanges = [
    { text: 'US Dollars', value: 'USD' },
    { text: 'Euros', value: 'EUR' },
    { text: 'British Pounds', value: 'GBP' },
    { text: 'Japanese Yen', value: 'JPY' },
    { text: 'Naira', value: 'NGN' },
  ];

  validate() {
    if (this.amount && this.targetCurrency && this.baseCurrency) {
      this.disableConvertButton = false;
      return;
    }
    this.disableConvertButton = true;
  }

  convert() {
    if (this.targetCurrency === this.baseCurrency) {
      this.error = true;
    } else {
      let currencySign: String = '';
      this.conversionService
        .convertCurrency(this.baseCurrency, this.targetCurrency, this.amount)
        .subscribe((data) => {
          switch (this.targetCurrency) {
            case 'USD':
              currencySign = '$';
              break;
            case 'EUR':
              currencySign = '€';
              break;
            case 'GBP':
              currencySign = '£';
              break;
            case 'JPY':
              currencySign = '¥';
              break;
            case 'NGN':
              currencySign = '₦';
              break;
            default:
              break;
          }
          this.conversionResult =
            currencySign +
            parseFloat(data.conversion_result).toFixed(2).toString();
        });
    }
  }
}
