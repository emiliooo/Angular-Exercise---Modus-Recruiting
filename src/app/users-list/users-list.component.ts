import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'ng-e-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  isLoad: boolean = false;

  customers: any;
  constructor(private userService: UserService, private router: Router) { }


  ngOnInit() {
    this.loadData();

    this.router.events.subscribe((routerEvent) => this.checkRouterEvent(routerEvent));
  }

  private checkRouterEvent(routerEvent) {

    if (routerEvent instanceof NavigationStart) {
      this.isLoad = true;
    } else if (routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError) {
      this.isLoad = false;
    }
  }

  loadData() {
    this.userService.getUsers().subscribe(res => {
      this.customers = res;
    });
  }

}
