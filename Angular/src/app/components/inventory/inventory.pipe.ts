import {Pipe, PipeTransform} from '@angular/core';
import {StockService} from '../../services/stock.service';
import {map} from 'rxjs/operators';

@Pipe({
  name: 'inventory',
})
export class InventoryPipe implements PipeTransform {

  private price: number;

  constructor(private stockService: StockService) {}

  transform(value: string): any {
    return this.stockService.getStockBySymbol(value)
      .pipe(map(data => {
          this.price = data;
          return this.price;
        }
      ))
  }

}
