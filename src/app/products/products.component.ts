import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore/firestore.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [];
  public labels: any = {
    previousLabel: 'Anterior',
    nextLabel: 'Siguiente',
    // screenReaderPaginationLabel: 'Pagination',
    // screenReaderPageLabel: 'page',
    // screenReaderCurrentLabel: `You're on page`
};

  constructor(
    public firestoreService: FirestoreService
  ) { }

  ngOnInit(): void {
    this.firestoreService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  // onPaginateChange(data) {
  //   this.productss = this.productss.slice(0, data.pageSize);
  // }
}
