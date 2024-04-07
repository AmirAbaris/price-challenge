import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
/**
 * input of the JSON files was not clear enough for more custom name!
 */
export class DataService {
  private http = inject(HttpClient);

  getPortfo1(): Observable<Item[]> {
    return this.http.get<Item[]>('../assets/portfo1.json');
  }

  getPortfo2(): Observable<Item[]> {
    return this.http.get<Item[]>('../assets/portfo2.json');
  }
}
