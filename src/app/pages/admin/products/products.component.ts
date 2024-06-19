import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  categoryList: any []= []
  constructor(private productService: ProductService){

  }
  ngOnInit(): void {
    this.getAllCategory();
  }
  isSidePaneVisible: boolean = false;
  productObject: any=
    {
      "ProductId": 0,
      "ProductSku": "",
      "ProductName": "",
      "ProductPrice": 0,
      "ProductShortName": "",
      "ProductDescription": "",
      "CreatedDate": new Date(),
      "DeliveryTimeSpan": "",
      "CategoryId": 2147483647,
      "ProductImageUrl": "",
      "UserId": 0
    };

    getAllCategory(){
      return this.productService.getAllProducts().subscribe((res:any)=>{
          this.categoryList = res.data;
      });
    }

  toggleSidePanel(){
    this.isSidePaneVisible = !this.isSidePaneVisible;
  }
}

