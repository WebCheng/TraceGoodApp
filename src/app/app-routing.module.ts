import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {HomeComponent} from './pages/home/home.component';
import {TopBarComponent} from './components/top-bar/top-bar.component';
import {LogupComponent} from './pages/logup/logup.component';



const routes: Routes = [
    {	path: '', 
    	component: HomeComponent
	},

    {	path: 'Login', 
    	component: LoginComponent},


    {	path: 'Logup', 
    	component: LogupComponent},


];

@NgModule({
    imports: [RouterModule.forRoot(routes, {enableTracing: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
