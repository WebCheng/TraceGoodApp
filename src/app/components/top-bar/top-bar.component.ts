import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    showDialog = false;


    onShow() {
        console.log('onShow called')
        console.log('this.showDialog', this.showDialog)
        this.showDialog = true;
        console.log('this.showDialog', this.showDialog)
    }


}
