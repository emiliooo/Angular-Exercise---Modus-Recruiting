import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


const routes: Routes = [{
  path: 'users',
  component: UsersListComponent
}, {
  path: 'detail/:id', component: UserDetailComponent
},{
  path: 'home',
  component: HomeComponent
}, {
  path: 'landing',
  component: LandingComponent
}, {
  path: '**',
  redirectTo: 'users'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
