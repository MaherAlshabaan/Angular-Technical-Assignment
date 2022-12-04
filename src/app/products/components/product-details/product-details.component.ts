import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  getProductDetailsUrl = 'https://fakestoreapi.com/products/';
  product!: Product;
  constructor(private route: ActivatedRoute ,private http: HttpClient) { }

  ngOnInit(): void {
    this.getParams();
  }

  getParams() {
    this.route.params.subscribe((params) => {
      this.getProductDetails(params['id']);
    });
  }

  getProductDetails(id: number) {
    this.http.get<Product>(this.getProductDetailsUrl + id).subscribe((data) => {
      this.product = data;
    });
  }

}
