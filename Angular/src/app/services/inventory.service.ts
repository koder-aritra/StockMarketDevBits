import { Injectable } from '@angular/core';
import {Inventory} from '../models/inventory';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private inventoryUrl = 'http://localhost:8080/api/inv';
  private inventoryUserIdUrl = 'http://localhost:8080/api/inv/user';

  constructor(private http: HttpClient) { }

  createInventory(inventory: Inventory): Observable<Inventory> {
    return this.http.post<Inventory>(this.inventoryUrl, inventory, {headers: this.httpHeaders});
  }

  updateInventory(inventory: Inventory): Observable<Inventory> {
    return this.http.put<Inventory>(this.inventoryUrl, inventory, {headers: this.httpHeaders});
  }

  getInventory(id: number): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(`${this.inventoryUserIdUrl}/${id}`, {headers: this.httpHeaders});
  }

  deleteInventory(id: number): Observable<Inventory> {
    return this.http.delete<Inventory>(`${this.inventoryUrl}/${id}`, {headers: this.httpHeaders});
  }

}
