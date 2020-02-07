import {Component, OnInit} from '@angular/core';
import {hotels} from '../../mock-data/hotels';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    hotels = hotels;

    constructor() {
    }

    ngOnInit() {
    }

}
