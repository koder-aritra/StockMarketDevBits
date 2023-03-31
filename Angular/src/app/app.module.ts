import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import {ROUTES} from './app.routes';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import {UserService} from './services/user.service';
import {StockService} from './services/stock.service';
import { StocksComponent } from './components/stocks/stocks.component';
import { StockPriceComponent } from './components/stocks/stock-price/stock-price.component';
import { StockInfoComponent } from './components/stocks/stock-info/stock-info.component';
import {WalletService} from './services/wallet.service';
import {InventoryService} from './services/inventory.service';
import { WalletComponent } from './components/wallet/wallet.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { WalletDepositComponent } from './components/wallet/wallet-deposit/wallet-deposit.component';
import { StockNewsComponent } from './components/stocks/stock-news/stock-news.component';
import {CryptoService} from './services/crypto.service';
import { StockCryptoComponent } from './components/stocks/stock-crypto/stock-crypto.component';
import { InventoryPipe } from './components/inventory/inventory.pipe';
import { ProfileComponent } from './components/profile/profile.component';
import {LoginGuard} from './guards/login.guard';
import { AdminComponent } from './components/admin/admin.component';
import { AdminEditComponent } from './components/admin/admin-edit/admin-edit.component';
import {AdminGuard} from './guards/admin.guard';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    NavbarComponent,
    StocksComponent,
    StockPriceComponent,
    StockInfoComponent,
    WalletComponent,
    InventoryComponent,
    WalletDepositComponent,
    StockNewsComponent,
    StockCryptoComponent,
    InventoryPipe,
    ProfileComponent,
    AdminComponent,
    AdminEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {onSameUrlNavigation: 'reload'}),
  ],
  providers: [UserService, StockService, WalletService, InventoryService, CryptoService, LoginGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
