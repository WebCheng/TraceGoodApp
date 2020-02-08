import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from './material-module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';
import {TopBarComponent} from './components/top-bar/top-bar.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        TopBarComponent,
    ],

    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        MaterialModule,
        MatNativeDateModule,
        ReactiveFormsModule,
    ],
    bootstrap: [
        AppComponent,
    ]
})
export class AppModule {
}


