import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct = {
    "productId": 1,
    "productName": "Leaf Rake",
    "productCode": "GDN-0011",
    "releaseDate": "March 19, 2021",
    "description": "Leaf rake with 48-inch wooden handle.",
    "price": 19.95,
    "starRating": 3.2,
    "imageUrl": "assets/images/leaf_rake.png"
  };
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const rawId = this.route.snapshot.paramMap.get('id')
    if(!rawId) return;
    const id = Number(rawId);
    this.pageTitle = `Product Detail: ${id}`;

  }

  onBack() {
    this.router.navigate(['/products']);
  }

}
