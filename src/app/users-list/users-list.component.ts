import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'ng-e-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  customers: any;
  constructor(private userService: UserService ) { }


  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.userService.getUsers().subscribe( res => {
      this.customers = res;
    });
  }

}
