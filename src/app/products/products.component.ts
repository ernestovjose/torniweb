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
  // productss = [];
  // listLength: number;
  // selectedMarca = this.products[1]; 

  constructor(
    public firestoreService: FirestoreService
  ) { }

  ngOnInit(): void {
    this.firestoreService.getProducts().subscribe(products => {
      this.products = products;
      // this.productss = this.products;
      // this.listLength = this.productss.length;
      // this.products = this.products.slice(0,1);
    });
    
    // console.log("hola");
    // console.log(this.products.length);
  }

  // onPaginateChange(data) {
  //   this.productss = this.productss.slice(0, data.pageSize);
  // }
}
