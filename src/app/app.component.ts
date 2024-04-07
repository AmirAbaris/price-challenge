import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PriceService } from './services/price.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Just4Test';

  constructor(private price: PriceService) {
    document.addEventListener('mw-change', (e: any) => {
      console.log(e.detail);
    });
  }

  ngOnInit() { }
}
