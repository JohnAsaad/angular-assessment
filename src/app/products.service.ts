import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient,
    private router:Router
    ) {}

    productAPI: string = "https://fakestoreapi.com/products"
    productData: any;

  ngOnInit(){
  }

  // getProductInfo() {
  //   this.http.get('https://fakestoreapi.com/products').subscribe((product) => {
  //     this.productData = product;
  //     console.log(this.productData)
  //   })
  // }

  goToDetails() {
    this.router.navigate(['details'])
  }

  public getProductInfo():Observable<any>{
    return this.http.get(this.productAPI)
    }

  public getProductById(id:any) {
    return this.http.get(this.productAPI + "/" + id)
  }  

  public getAllCategories() {
    return this.http.get("https://fakestoreapi.com/products/categories")
  }  

  public getProductByCategories(keyword:string) {
    return this.http.get("https://fakestoreapi.com/products/category/"+keyword) 

  }
}



