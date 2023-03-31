import { Component, OnInit } from '@angular/core';
import {StockService} from '../../../services/stock.service';
import {StockNews} from '../../../models/stockNews';

@Component({
  selector: 'app-stock-news',
  templateUrl: './stock-news.component.html',
  styleUrls: ['./stock-news.component.css']
})
export class StockNewsComponent implements OnInit {

  stockNews: StockNews[];

  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.stockService.getStockNews()
      .subscribe(data => {
        this.stockNews = data;
      })
  }

}
