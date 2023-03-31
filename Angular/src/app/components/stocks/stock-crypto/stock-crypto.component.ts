import { Component, OnInit } from '@angular/core';
import {CryptoService} from '../../../services/crypto.service';
import {CryptoCurrency} from '../../../models/crypto';

@Component({
  selector: 'app-stock-crypto',
  templateUrl: './stock-crypto.component.html',
  styleUrls: ['./stock-crypto.component.css']
})
export class StockCryptoComponent implements OnInit {

  cryptos: CryptoCurrency[];

  constructor(private cryptoService: CryptoService) { }

  ngOnInit() {
    this.cryptoService.getCrypto()
      .subscribe(data => this.cryptos = data)
  }

}
