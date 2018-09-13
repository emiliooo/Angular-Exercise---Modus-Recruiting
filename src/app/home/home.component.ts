import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ng-e-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output()
  state: boolean;

  constructor() { }

  select(sts) {
    this.state = sts;
  }

  selectOut(sts) {
    this.state = sts;
  }


  ngOnInit() {
  }

}
