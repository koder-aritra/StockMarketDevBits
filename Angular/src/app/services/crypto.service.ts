import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CryptoCurrency} from '../models/crypto';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private http: HttpClient) { }

  getCrypto(): Observable<CryptoCurrency[]> {
    return this.http.get<CryptoCurrency[]>('https://api.iextrading.com/1.0/stock/market/crypto');
  }

}
