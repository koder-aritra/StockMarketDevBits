import {Injectable, QueryList} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StockPrice} from '../models/stockPrice';
import {Observable} from 'rxjs';
import {CompanyInfo} from '../models/companyInfo';
import {StockNews} from '../models/stockNews';
import {map} from 'rxjs/operators';
import {HistoricalPrices} from '../models/historicalPrices';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }

  stockList = [
    { symbol: 'googl', company: 'Google'},
    { symbol: 'aapl', company: 'Apple'},
    { symbol: 'amzn', company: 'Amazon'},
    { symbol: 'msft', company: 'Microsoft'},
    { symbol: 'ibm', company: 'IBM'},
    { symbol: 'ko', company: 'Coca-Cola'},
    { symbol: 'intc', company: 'Intel'},
    { symbol: 'dis', company: 'Disney'},
    { symbol: 'nke', company: 'Nike'},
    { symbol: 'v', company: 'Visa'},
    { symbol: 'vz', company: 'Verizon'},
    { symbol: 'mcd', company: 'McDonalds'},
    { symbol: 'axp', company: 'AmericanExpress'},
    { symbol: 'cvx', company: 'Chevron'},
    { symbol: 'fb', company: 'Facebook'},
    { symbol: 'pep', company: 'PepsiCo'},
    { symbol: 'baba', company: 'Alibaba'},
    { symbol: 'nflx', company: 'Netflix'},
    { symbol: 't', company: 'ATT'},
    { symbol: 'orcl', company: 'Oracle'},
    { symbol: 'tsla', company: 'Tesla'},
  ];

  getStockPrice(i: number): Observable<StockPrice> {
    return this.http.get<StockPrice>('https://api.iextrading.com/1.0/stock/' + this.stockList[i].symbol + '/quote');
  }

  getStockBySymbol(symbol: string): Observable<number> {
    return this.http.get<number>('https://api.iextrading.com/1.0/stock/' + symbol + '/price');
  }

  getStockNews(): Observable<StockNews[]> {
    return this.http.get<StockNews[]>('https://api.iextrading.com/1.0/stock/market/news/last/10');
  }

  getCompanyInfo(symbol: string, price: string): Observable<CompanyInfo> {
    console.log('service ' + price);
    return this.http.get<CompanyInfo>('https://api.iextrading.com/1.0/stock/' + symbol + '/company');
  }

}
