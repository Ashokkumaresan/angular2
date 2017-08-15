import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
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
import { AppRoutingModule } from './app-routing.module';
import { AppGuard } from './app.guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuard } from './deactivate.guard.service';
import { ActivateUser } from './activate.service';
import { formService } from './form.service';
import { EmpformComponent } from './empform/empform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { Arealength } from './app.pipe';
import { FilterPipe } from './filter.pipe';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { AuthFire } from './authenticate/authfire.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UserlistComponent,
    CustomuserComponent,
    basichightlightdirective,
    BetterHightlightDirective,
    UnlessDirective,
    UsersComponent,
    PagenotfoundComponent,
    EmpformComponent,
    ReactiveformComponent,
    Arealength,
    FilterPipe,
    AuthenticateComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,AppRoutingModule,ReactiveFormsModule
  ],
  providers: [LoginService,AppGuard,AuthService,CanDeactivateGuard,UserService,UserResolver,ActivateUser,formService,AuthFire],
  bootstrap: [AppComponent]
})
export class AppModule { }
