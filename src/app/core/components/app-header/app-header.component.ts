import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'ng-e-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {


  user: User = {
    firstName: 'Ahsan',
    lastName: 'Ayaz'
  };
  @Output()
  logged: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  isLoggedIn: boolean;
  constructor() { }

  ngOnInit() {
    this.isLoggedIn = false;
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user in
   */
  login() {
    this.isLoggedIn = true;
    this.logged.emit(this.isLoggedIn);
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user in
   */
  signup() {
    this.isLoggedIn = true;
    this.logged.emit(this.isLoggedIn);
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user out
   */
  logout() {
    this.isLoggedIn = false;
    this.logged.emit(this.isLoggedIn);
  }

}
