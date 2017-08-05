import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserlistComponent } from './userlist/userlist.component';
import { CustomuserComponent } from './customuser/customuser.component';
import { basichightlightdirective } from './basichighlight/basichighlight.directive';
import { BetterHightlightDirective } from './basichighlight/better-hightlight.directive';
import { UnlessDirective } from './basichighlight/unless.directive';
import { LoginService } from './Logging.service';
import { UsersComponent } from './users/users.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const appRoutes:Routes=[
{path:'',component:DashboardComponent},
{path:'login',component:LoginComponent},
{path:'user/:id/:name',component:UsersComponent},
{path:'dashboard',component:DashboardComponent},
{path:'notfound',component:PagenotfoundComponent},
{path:'**',redirectTo:'/notfound'}
];
@NgModule({
	imports:[
		RouterModule.forRoot(appRoutes)
	],
	exports:[RouterModule]

})
export class AppRoutingModule{

}