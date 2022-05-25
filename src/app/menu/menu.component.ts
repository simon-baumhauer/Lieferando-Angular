import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DialogComponent } from '../dialog/dialog.component';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  item$: Observable<any>;
  constructor(public dialog: MatDialog, firestore: Firestore) {
    const coll = collection(firestore, 'basket');
    this.item$ = collectionData(coll);

    this.item$.subscribe((basket) => {
      console.log('akuteller basket:', basket);
    });
  }

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(DialogComponent);
  }

  addToBasket(name, price) {}
}
