import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {Wallet} from '../../models/wallet';
import {WalletService} from '../../services/wallet.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users: User[];
  wallets: Wallet[];

  constructor(private router: Router, private userService: UserService, private walletService: WalletService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(data => {
        this.users = data;
      });
    this.walletService.getWallets()
      .subscribe(data => {
        this.wallets = data;
      })
  }

  editUser(user: User) {
    localStorage.removeItem('editUserId');
    localStorage.removeItem('editUserName');
    localStorage.removeItem('editUserPass');
    localStorage.removeItem('editUserRole');
    localStorage.removeItem('editUserEmail');
    localStorage.removeItem('editUserFirstName');
    localStorage.removeItem('editUserLastName');

    localStorage.setItem('editUserId', String(user.id));
    localStorage.setItem('editUserName', user.username);
    localStorage.setItem('editUserPass', user.password);
    localStorage.setItem('editUserEmail', user.email);
    localStorage.setItem('editUserRole', user.role);
    localStorage.setItem('editUserFirstName', user.firstName);
    localStorage.setItem('editUserLastName', user.lastName);

    this.router.navigate(['adminEdit'])
  }
}
