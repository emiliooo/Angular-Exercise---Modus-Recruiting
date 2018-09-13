import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'ng-e-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: any;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.LoadUser();
  }

  LoadUser() {
    const id = +this.route.snapshot.params['id'];
    this.userService.getUser(id).subscribe(response => {
      this.user = response;
    });
  }


}
