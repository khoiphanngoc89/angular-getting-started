import { Component, Input, OnChanges, EventEmitter, Output } from "@angular/core";


@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number = 4;
    cropWidth: number = 75;
    @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();

    onClick() {
        this.ratingClicked.emit(`The rating ${this.rating} was click`);
    }

    ngOnChanges() {
        this.cropWidth = this.rating * 75/5;
    }

}