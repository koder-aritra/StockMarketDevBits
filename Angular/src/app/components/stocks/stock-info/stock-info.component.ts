import { Component, OnInit } from '@angular/core';
import {StockService} from '../../../services/stock.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {WalletService} from '../../../services/wallet.service';
import {InventoryService} from '../../../services/inventory.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-stock-info',
  templateUrl: './stock-info.component.html',
  styleUrls: ['./stock-info.component.css']
})
export class StockInfoComponent implements OnInit {

  symbolInfo: string;
  companyNameInfo: string;
  exchangeInfo: string;
  industryInfo: string;
  websiteInfo: string;
  descriptionInfo: string;
  ceoInfo: string;
  sectorInfo: string;
  stockPrice: string;
  tempAmount: number;
  tempStockPrice: number;
  tempWallet: number;
  tempWalletLeft: number;
  amountToPay: number;
  cannotBuy: boolean;
  walletForm: FormGroup;
  inventoryForm: FormGroup;
  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private stockService: StockService,
              private walletService: WalletService, private inventoryService: InventoryService) { }

  ngOnInit() {
    this.stockService.getCompanyInfo(localStorage.getItem('stockSymbolForInfo'), localStorage.getItem('stockPriceForInfo'))
      .subscribe(data => {
        this.symbolInfo = data.symbol;
        this.companyNameInfo = data.companyName;
        this.exchangeInfo = data.exchange;
        this.industryInfo = data.industry;
        this.websiteInfo = data.website;
        this.descriptionInfo = data.description;
        this.ceoInfo = data.CEO;
        this.sectorInfo = data.sector;
        this.stockPrice = localStorage.getItem('stockPriceForInfo');
      });

    this.addForm = this.formBuilder.group({
      stockAmount: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(6)])]
    });

    this.walletForm = this.formBuilder.group({
      id: [localStorage.getItem('walletId')],
      wUserId: [localStorage.getItem('id')],
      amount: [this.amountToPay]
    });

    this.inventoryForm = this.formBuilder.group({
      id: [0],
      iUserId: [localStorage.getItem('id')],
      name: [localStorage.getItem('stockNameForInfo')],
      symbol: [localStorage.getItem('stockSymbolForInfo')],
      price: [parseFloat(localStorage.getItem('stockPriceForInfo'))]
    });
  }

  buy() {
    this.tempAmount = this.addForm.controls['stockAmount'].value;
    this.tempStockPrice = parseFloat(localStorage.getItem('stockPriceForInfo'));
    this.tempWallet = parseFloat(localStorage.getItem('wallet'));
    this.amountToPay = this.tempAmount * this.tempStockPrice;
    this.tempWalletLeft = this.tempWallet - this.amountToPay;
    this.walletForm.controls['amount'].setValue(this.tempWalletLeft);
    if (this.amountToPay < this.tempWallet) {
      this.walletService.updateWallet(this.walletForm.value)
        .subscribe(data => {
          for (let i = 0; i < this.tempAmount; i++) {
            this.updateInventory();
          }
        });
    } else {
      this.cannotBuy = true;
    }
  }

  updateInventory() {
    this.inventoryService.createInventory(this.inventoryForm.value)
      .subscribe(data => {
        this.router.navigate(['inventory']);
      });
  }
}
