import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { UserService } from './core/services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListModule } from './users-list/user-list-module/user-list.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    UserListModule
  ],
  exports: [
    UserListModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
