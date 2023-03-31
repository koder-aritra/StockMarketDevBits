import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {StockService} from '../../../services/stock.service';
import {StockPrice} from '../../../models/stockPrice';

@Component({
  selector: 'app-stock-price',
  templateUrl: './stock-price.component.html',
  styleUrls: ['./stock-price.component.css']
})
export class StockPriceComponent implements OnInit {

  stocks: StockPrice[] = [];

  constructor(private stockService: StockService, private router: Router) { }

  ngOnInit() {
    for (let i = 0; i < 21; i++) {
      this.stockService.getStockPrice(i)
        .subscribe(data => (this.stocks.push(data))
        );
    }
  }

  getStockInfo(stockSymbol: string, stockPrice: number, stockName: string) {
    localStorage.setItem('stockSymbolForInfo', stockSymbol);
    localStorage.setItem('stockPriceForInfo', String(stockPrice));
    localStorage.setItem('stockNameForInfo', stockName);
    this.router.navigate(['/stockInfo']);
  }

}
