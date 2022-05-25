import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  basket$: Observable<any>;
  basket: Array<any>;
  constructor(firestore: Firestore) {
    const coll = collection(firestore, 'basket');
    this.basket$ = collectionData(coll);

    this.basket$.subscribe((newBasket) => {
      console.log('aktueller basket:', newBasket);
      this.basket = newBasket;
    });
  }

  ngOnInit(): void {}
}
