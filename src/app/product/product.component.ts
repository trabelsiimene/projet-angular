import { Component, OnInit } from '@angular/core';
import { Product } from 'src/model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  listProduct: Product[];
  product:Product;

  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.product=new Product;
    this.service.getProduct().subscribe((data:Product[])=>this.listProduct=data);
  }
  save(){
    this.service.postProduct(this.product).subscribe(()=>this.listProduct=[this.product,...this.listProduct]);

  }
  delete(id:number){
    this.service.deleteProduct(id).subscribe((res =>
      {this.listProduct=this.listProduct.filter(product=>product.id!=id)
      }
       ));
       hhhh
  }
  update(id:number){
    this.service.puttProduct(id,this.product).subscribe(listProduct=>
      {this.listProduct=[this.product,...this.listProduct]
      }
        );
  }


}
