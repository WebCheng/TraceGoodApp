import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';




const appRoutes:Routes=[
  // {path:'',redirectTo:'Home',pathMatch:'full'},
  // {path:'Home',component: HomeComponent}, 
  // {path:'Contact',component: ContactComponent},
 
  ];

@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
