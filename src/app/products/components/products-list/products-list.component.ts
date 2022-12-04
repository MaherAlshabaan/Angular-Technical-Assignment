import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  getProductsUrl = 'https://fakestoreapi.com/products'
  products: Product[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.http.get<Product[]>(this.getProductsUrl).subscribe((data) => {
      this.products = data;
    });
  }

}
