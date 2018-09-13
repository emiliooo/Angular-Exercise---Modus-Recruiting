import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'ng-e-app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss']
})
export class AppContentComponent implements OnInit {
  user: User = {
    firstName: 'Ahsan',
    lastName: 'Ayaz'
  };

  @Input()
  isLoggedIn: boolean;

  @Output()
  logouted: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    this.isLoggedIn = false;
  }

  ShowState(state) {
    console.log(state);
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user in
   */
  login() {
    this.isLoggedIn = true;
    this.logouted.emit(this.isLoggedIn);
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user out
   */
  logout() {
    this.isLoggedIn = false;
    this.logouted.emit(this.isLoggedIn);
  }

}
