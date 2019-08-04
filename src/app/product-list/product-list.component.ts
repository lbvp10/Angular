import { Component, OnInit } from '@angular/core';
import {Producto} from "./Producto";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private products = new Array<Producto>(new Producto("Galaxy s9",1),new Producto("Galaxy s10",2));

  ngOnInit(): void {

  }

  share() {
    window.alert('The product has been shared!');
  }
  notify(){
    window.alert('You will be notified when the product goes on sale');
  }

}
