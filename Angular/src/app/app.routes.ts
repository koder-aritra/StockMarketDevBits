import {Routes} from '@angular/router';
import {SigninComponent} from './components/signin/signin.component';
import {SignupComponent} from './components/signup/signup.component';
import {HomeComponent} from './components/home/home.component';
import {StockInfoComponent} from './components/stocks/stock-info/stock-info.component';
import {WalletComponent} from './components/wallet/wallet.component';
import {InventoryComponent} from './components/inventory/inventory.component';
import {WalletDepositComponent} from './components/wallet/wallet-deposit/wallet-deposit.component';
import {ProfileComponent} from './components/profile/profile.component';
import {LoginGuard} from './guards/login.guard';
import {AdminComponent} from './components/admin/admin.component';
import {AdminEditComponent} from './components/admin/admin-edit/admin-edit.component';
import {AdminGuard} from './guards/admin.guard';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: SigninComponent},
  { path: 'register', component: SignupComponent },
  { path: 'wallet', component: WalletComponent, canActivate: [LoginGuard] },
  { path: 'walletDeposit', component: WalletDepositComponent, canActivate: [LoginGuard] },
  { path: 'inventory', component: InventoryComponent, canActivate: [LoginGuard] },
  { path: 'stockInfo', component: StockInfoComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard]},
  { path: 'adminEdit', component: AdminEditComponent, canActivate: [AdminGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [LoginGuard] },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

