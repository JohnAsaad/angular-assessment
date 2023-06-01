import { Component,OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import {defineComponents, IgcRatingComponent} from 'igniteui-webcomponents';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';



defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  productData:Array <any> = [];
  categoriesData:Array <any> = [];

  constructor(private http: HttpClient,
    private router:Router,
    private prd:ProductsService,
    private  router2:ActivatedRoute
    ) {}

    imgCollection: Array<object> = [
      {
        image: 'https://loremflickr.com/g/600/400/paris',
        thumbImage: 'https://loremflickr.com/g/1200/800/paris',
        alt: 'Image 1',
        title: 'Image 1'
      }, {
        image: 'https://loremflickr.com/600/400/brazil,rio',
        thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
        title: 'Image 2',
        alt: 'Image 2'
      }, {
        image: 'https://loremflickr.com/600/400/paris,girl/all',
        thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
        title: 'Image 3',
        alt: 'Image 3'
      }, {
        image: 'https://loremflickr.com/600/400/brazil,rio',
        thumbImage: 'https://loremflickr.com/1200/800/brazil,rio',
        title: 'Image 4',
        alt: 'Image 4'
      }, {
        image: 'https://loremflickr.com/600/400/paris,girl/all',
        thumbImage: 'https://loremflickr.com/1200/800/paris,girl/all',
        title: 'Image 5',
        alt: 'Image 5'
      },
      {
        image: 'https://loremflickr.com/600/400/paris,girl/all',
        thumbImage: 'https://loremflickr.com/1200/800/paris,girl/all',
        title: 'Image 5',
        alt: 'Image 5'
      },
      {
        image: 'https://loremflickr.com/600/400/paris,girl/all',
        thumbImage: 'https://loremflickr.com/1200/800/paris,girl/all',
        title: 'Image 5',
        alt: 'Image 5'
      },
      {
        image: 'https://loremflickr.com/600/400/paris,girl/all',
        thumbImage: 'https://loremflickr.com/1200/800/paris,girl/all',
        title: 'Image 5',
        alt: 'Image 5'
      },
      {
        image: 'https://loremflickr.com/600/400/paris,girl/all',
        thumbImage: 'https://loremflickr.com/1200/800/paris,girl/all',
        title: 'Image 5',
        alt: 'Image 5'
      }
  ];

  ngOnInit(){
    this.getProducts1();
    this.getCategories();
  }

  getProducts1 () {
    this.prd.getProductInfo().subscribe((products) => {
      this.productData = products;
    });

  }

  getCategories() {
    this.prd.getAllCategories().subscribe((categories:any) => {
      this.categoriesData = categories;
      console.log(categories)
    });
  }

  filterCategory(event:any) {
    let value = event.target.value;
    (value == 'All') ? this.getProducts1() : this.getProdCat(value)

    console.log(value)
  
  }

  getProdCat(keyword:string) {
    this.prd.getProductByCategories(keyword).subscribe((res:any)=> {
      this.productData = res;
    })
  }

  // getProductInfo() {
  //   this.http.get('https://fakestoreapi.com/products').subscribe((product) => {
  //     this.productData = product;
  //     console.log(this.productData)
  //   })

//   goToDetails(id: number) {
// let curUrl = this.router2.snapshot.url.join('/');
// window.location.href = curUrl + '/' + id;
//   }


  }

 


