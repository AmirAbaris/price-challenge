import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Item } from '../../models/item.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-price-table',
  standalone: true,
  imports: [],
  templateUrl: './price-table.component.html',
  styleUrl: './price-table.component.scss'
})
export class PriceTableComponent {
  private dataService = inject(DataService);
  private destroyref = inject(DestroyRef);

  port1Data: Item[] | undefined;
  port2Data: Item[] | undefined;

  public getPort1Data(): void {
    this.dataService.getPortfo1().pipe(takeUntilDestroyed(this.destroyref)).subscribe((res) => {
      this.port1Data = res;
    });
  }

  public getPort2Data(): void {
    this.dataService.getPortfo2().pipe(takeUntilDestroyed(this.destroyref)).subscribe((res) => {
      this.port2Data = res;
    });
  }
}
