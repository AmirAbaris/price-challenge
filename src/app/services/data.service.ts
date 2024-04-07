import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Item } from '../models/item.model';
import { NameMap } from '../models/name-map.model';

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

  updateIdToName(portData: Item[]): Observable<Item[]> {
    return this.getMws().pipe(
      map(mws => {
        return portData.map(item => ({
          insId: mws[item.insId].name,
          quantity: item.quantity
        }));
      })
    );
  }

  private getMws(): Observable<NameMap> {
    return this.http.get<NameMap>('../assets/mws.json');
  }
}
