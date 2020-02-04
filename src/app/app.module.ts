import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {HotelListComponent} from './components/hotel-list/hotel-list.component';
import {HotelCardComponent} from './components/hotel-card/hotel-card.component';

import {DemoMaterialModule} from './material-module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


const appRoutes: Routes = [

{path:'Login',component: LoginComponent}, 
];

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HotelListComponent,
        HotelCardComponent
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true} // <-- debugging purposes only
        ),
       
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        DemoMaterialModule,
        MatNativeDateModule,
        ReactiveFormsModule,
    ],
    bootstrap: [
        AppComponent,
        LoginComponent
    ]
})
export class AppModule {
}
