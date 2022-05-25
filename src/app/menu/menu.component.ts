import { Component, OnInit } from '@angular/core';
import {
  Firestore,
  collectionData,
  collection,
  doc,
} from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { setDoc } from '@firebase/firestore';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  name: string;
  price: string;
  constructor(public dialog: MatDialog, private firestore: Firestore) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(DialogComponent);
  }

  addToBasket(name, price) {
    this.name = name;
    this.price = price;
    console.log(this.name, this.price);
    const coll = collection(this.firestore, 'basket');
    setDoc(doc(coll), { name: this.name, price: this.price });
  }
}
