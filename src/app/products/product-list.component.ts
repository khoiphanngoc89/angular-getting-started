import { Component, OnInit } from "@angular/core";
import { IProduct } from './product';
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
})

export class ProductListComponent implements OnInit {
    pageTitle: string = "Product List";
    imageWidth: number = 100;
    imageMargin: number = 2;
    isShowImage: boolean = false;

    constructor(private productService: ProductService) {

    }

    private _listFilter: string = '';
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.performFilter(this.listFilter);
    }

    performFilter(filteredBy: string) : IProduct[] {
        if(!filteredBy) return this.products;
        const filtered = filteredBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().includes(filtered));
    }

    filteredProducts: IProduct[] = [];
    products: IProduct[] = [];

    ngOnInit() {
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products.filter(n => n);
    }

    onRatingClicked(value: string): void {
        this.pageTitle = 'Product List: ' + value;

    }
}