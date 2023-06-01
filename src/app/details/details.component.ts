import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {defineComponents, IgcRatingComponent} from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {


  id:any
  products: any = {};


  constructor(
    private _products: ProductsService,
    private route:ActivatedRoute
  ) {
    this.id = this.route.snapshot.params["id"];
    console.log(this.id)
  }


  ngOnInit () {
    this.getProductById();
  }

  getProductById() {
    this._products.getProductById(this.id).subscribe((res) => {
      this.products = res;
      console.log(res)
    })
  }

}
