import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Producto} from "../product-list/Producto";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public product;

  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      //console.log("antes de click")
      //this.product = params.get('productId');

    });
  }

}
