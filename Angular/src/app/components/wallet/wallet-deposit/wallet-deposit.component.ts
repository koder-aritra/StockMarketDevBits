import { Component, OnInit } from '@angular/core';
import {WalletService} from '../../../services/wallet.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-wallet-deposit',
  templateUrl: './wallet-deposit.component.html',
  styleUrls: ['./wallet-deposit.component.css']
})
export class WalletDepositComponent implements OnInit {

  addForm: FormGroup;
  private tempAmount: any;

  constructor(private formBuilder: FormBuilder, private walletService: WalletService, private router: Router) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [localStorage.getItem('walletId')],
      wUserId: [localStorage.getItem('id')],
      amount: [ '', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(6)])]
    });
  }

  deposit() {
    this.tempAmount = this.addForm.controls['amount'].value;
    this.addForm.controls['amount'].setValue(parseInt(localStorage.getItem('wallet')) + parseInt(this.tempAmount));
    this.walletService.updateWallet(this.addForm.value)
      .subscribe(data =>
        this.router.navigate(['wallet'])
      );
  }
}
