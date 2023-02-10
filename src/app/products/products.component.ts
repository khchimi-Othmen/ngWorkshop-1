import { Component } from '@angular/core';
import {Product} from "../Models/product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  // injection de dep- ma 8ir instance
  constructor(private R:Router) {
  }

  listProdcut:Product[]=[
    {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
    {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
    {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0} ];

  buy(p:Product) {
    p.quantity--;
  }

  like(p: Product) {
    p.quantity++;
  }


  showDetails(id:number) {
    this.R.navigate(['details',id])
  }
}
