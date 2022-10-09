import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  urll="http://localhost:3000/product";

  constructor(private httpc: HttpClient) { }
  getProduct(){
return this.httpc.get<Product[]>(this.urll);
  }

  postProduct(p:Product){
    return this.httpc.post(this.urll,p);
  }
  deleteProduct(id: number){
    return this.httpc.delete(`${this.urll}/${id}`);
  }
  puttProduct(id:number,p:Product){
    return this.httpc.put(`${this.urll}/${id}`,p);
  }

}

