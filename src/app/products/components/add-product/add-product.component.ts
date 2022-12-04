import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  addProductUrl = 'https://fakestoreapi.com/products';
  addProductForm!: FormGroup;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.addProductForm = new FormGroup({
      "title": new FormControl('',Validators.required),
      "price": new FormControl('',Validators.required),
      "description": new FormControl('',Validators.required),
      "category": new FormControl('',Validators.required),
      "image": new FormControl('',Validators.required)
    });
  }

  addProduct(){
    this.http.post(this.addProductUrl, this.addProductForm.value).subscribe((res) => {
      const toast = document.getElementById('addProductToast');
      toast?.classList.add('show');
      setTimeout(() => {
        toast?.classList.remove('show');
        this.router.navigate(['/products']);
      }, 3000);
      
    });
  }

}
