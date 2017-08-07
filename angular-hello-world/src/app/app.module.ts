import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { AppRoutingModule } from './app-routing.module';
import { AppGuard } from './app.guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuard } from './deactivate.guard.service';


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
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,FormsModule,AppRoutingModule
  ],
  providers: [LoginService,AppGuard,AuthService,CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
