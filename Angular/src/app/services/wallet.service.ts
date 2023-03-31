import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Wallet} from '../models/wallet';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private walletsUrl = 'http://localhost:8080/api/wallets';
  private walletUrl = 'http://localhost:8080/api/wallet';


  constructor(private http: HttpClient) { }

  getWallets(): Observable<Wallet[]> {
    return this.http.get<Wallet[]>(this.walletsUrl, {headers: this.httpHeaders});
  }

  createWallet(wallet: Wallet): Observable<Wallet> {
    return this.http.post<Wallet>(this.walletUrl, wallet, {headers: this.httpHeaders});
  }

  getWallet(id: number): Observable<Wallet> {
    return this.http.get<Wallet>(`${this.walletUrl}/user/${id}`,{headers: this.httpHeaders});
  }

  updateWallet(wallet: Wallet): Observable<Wallet> {
    return this.http.put<Wallet>(this.walletUrl, wallet, {headers: this.httpHeaders});
  }

}
