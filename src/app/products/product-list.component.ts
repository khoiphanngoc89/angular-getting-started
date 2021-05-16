import { Component, OnInit } from "@angular/core";
import { IProduct } from '../models/product';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent implements OnInit {
    pageTitle: string = "Product List";
    imageWidth: number = 100;
    imageMargin: number = 2;
    isShowImage: boolean = false;
    listFilter: string = 'cart';
    products: IProduct[] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2021",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "assets/images/leaf_rake.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2021",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.8,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
        }
    ]

    ngOnInit() {
        
    }
}