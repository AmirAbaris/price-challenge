import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  constructor() {
    setInterval(() => {
      let r = Math.floor(Math.random() * (3e3 - 1e3 + 1)) + 1e3;
      let l = this.instruments.length - 1;
      let i = Math.floor(Math.random() * (l));
      document.dispatchEvent(new CustomEvent("mw-change", { "detail": { instrument: this.instruments[i], price: r } }));
    }, 5e3)
  }
  instruments = ['IRO1MSMI0001', 'IRO1FOLD0001', 'IRO1KMND0001', 'IRO1KTEK0001', 'IRO1MOBN0001', 'IRO1PTEH0001', 'IRO1TEST0001'];

}
