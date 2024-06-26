import { Component, DestroyRef, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Item } from '../../models/item.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PriceService } from '../../services/price.service';

@Component({
  selector: 'app-price-table',
  standalone: true,
  imports: [],
  templateUrl: './price-table.component.html',
  styleUrl: './price-table.component.scss'
})
export class PriceTableComponent {
  private dataService = inject(DataService);
  private priceService = inject(PriceService);
  private destroyref = inject(DestroyRef);

  constructor() {
    document.addEventListener("mw-change", (event: Event) => {
      const priceChangeEvent = (event as CustomEvent).detail;
      if (priceChangeEvent) {
        const { instrument, price } = priceChangeEvent;
        this.updatePriceData(instrument, price);
      }
    });
  }

  port1Data: Item[] | undefined;
  port2Data: Item[] | undefined;

  public getPort1Data(): void {
    this.dataService.getPortfo1().pipe(takeUntilDestroyed(this.destroyref)).subscribe((res) => {
      if (!this.port1Data) {
        this.port1Data = res;
      }
    });
  }

  public getPort2Data(): void {
    this.dataService.getPortfo2().pipe(takeUntilDestroyed(this.destroyref)).subscribe((res) => {
      if (!this.port2Data) {
        this.port2Data = res;
      }
    });
  }

  public updateIdToName(): void {
    if (this.port1Data) {
      this.dataService.updateIdToName(this.port1Data).subscribe((data) => {
        this.port1Data = data;
      });
    }
    if (this.port2Data) {
      this.dataService.updateIdToName(this.port2Data).subscribe((data) => {
        this.port2Data = data;
      });
    }
  }
  
  private updatePriceData(instrument: string, price: number): void {
    if (this.port1Data) {
      this.port1Data.forEach(item => {
        if (item.insId === instrument) {
          item.price = price;
        }
      });
    }
    if (this.port2Data) {
      this.port2Data.forEach(item => {
        if (item.insId === instrument) {
          item.price = price;
        }
      });
    }
  }
}
