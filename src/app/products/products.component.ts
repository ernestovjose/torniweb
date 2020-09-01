import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore/firestore.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [];

  constructor(
    public firestoreService: FirestoreService
  ) { }

  ngOnInit(): void {
    this.firestoreService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
}
