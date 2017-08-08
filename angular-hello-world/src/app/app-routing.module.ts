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
import { UserResolver } from './users/users.resolver.service';
import { UserService } from './users/user.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppGuard } from './app.guard.service';
import { CanDeactivateGuard } from './deactivate.guard.service';

const appRoutes:Routes=[
{path:'',component:DashboardComponent},
{path:'login',component:LoginComponent, canDeactivate:[CanDeactivateGuard]},
{path:'user/:id/:name',canActivate:[AppGuard],component:UsersComponent,resolve:{uresolve:UserResolver}},
{path:'dashboard',component:DashboardComponent},
{path:'notfound',component:PagenotfoundComponent,data:{message:'404! Page not found error'}},
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