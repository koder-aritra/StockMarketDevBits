import { Component, OnInit } from '@angular/core';
import {WalletService} from '../../services/wallet.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  walletId: number;
  wUserId: number;
  amount: number;
  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private walletService: WalletService, private router: Router) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [0],
      wUserId: [localStorage.getItem('id')],
      amount: [0],
    });

    this.walletService.getWallet(parseInt(localStorage.getItem('id')))
      .subscribe(data => {
        if (data) {
          this.walletId = data.id;
          this.wUserId = data.wUserId;
          this.amount = data.amount;
          localStorage.setItem('walletId', String(this.walletId));
          localStorage.setItem('wallet', String(this.amount));
        } else {
          this.walletService.createWallet(this.addForm.value)
            .subscribe(data =>
              window.location.reload()
            );
        }
      })
  }

}
