import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConversionService {
  constructor(private http: HttpClient) {}

  convertCurrency(
    baseCurrency: string,
    targetCurrency: string,
    amount: number
  ): Observable<any> {
    const apiUrl = `https://v6.exchangerate-api.com/v6/c3b76af4520838a92804b25d/pair/${baseCurrency}/${targetCurrency}/${amount}`;
    return this.http.get<any>(apiUrl);
  }
}
