import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef, Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {InventoryService} from '../../services/inventory.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Inventory} from '../../models/inventory';
import {WalletService} from '../../services/wallet.service';
import {StockService} from '../../services/stock.service';
import {StockPrice} from '../../models/stockPrice';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  addForm: FormGroup;
  inventory: Inventory[];
  walletForm: FormGroup;
  amountToGet: number;
  newWallet: number;

  constructor(private formBuilder: FormBuilder, private walletService: WalletService, private inventoryService: InventoryService) { }

  ngOnInit() {
    this.inventoryService.getInventory(parseInt(localStorage.getItem('id')))
      .subscribe(data => {
        this.inventory = data;
      }
      );

    this.addForm = this.formBuilder.group({
      id: [0],
      iUserId: [localStorage.getItem('id')],
      name: [''],
      symbol: [''],
      price: ['']
    });

    this.walletForm = this.formBuilder.group({
      id: [localStorage.getItem('walletId')],
      wUserId: [localStorage.getItem('id')],
      amount: [this.newWallet]
    });
  }

  sellItem(id: number, price: number) {
    console.log('id ' + id + ' price ' + price);
    this.amountToGet = parseFloat(String(price));
    this.newWallet = parseFloat(localStorage.getItem('wallet')) + this.amountToGet;
    this.walletForm.controls['amount'].setValue(this.newWallet);
    this.walletService.updateWallet(this.walletForm.value)
      .subscribe(data => {
        this.inventoryService.deleteInventory(id)
          .subscribe(data =>
            window.location.reload()
          );
      })
  }

}
