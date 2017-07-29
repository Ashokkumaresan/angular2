import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserlistComponent } from './userlist/userlist.component';
import { CustomuserComponent } from './customuser/customuser.component';
import { basichightlightdirective } from './basichighlight/basichighlight.directive';
import { BetterHightlightDirective } from './basichighlight/better-hightlight.directive';
import { UnlessDirective } from './basichighlight/unless.directive';
import { LoginService } from './Logging.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UserlistComponent,
    CustomuserComponent,
    basichightlightdirective,
    BetterHightlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
