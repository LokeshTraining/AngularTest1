import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-dashboard',
  templateUrl: './test-dashboard.component.html',
  styleUrls: ['./test-dashboard.component.css']
})
export class TestDashboardComponent implements OnInit {

  dashboardName: string;
  userName: string = 'Lokesh';

  countFromChild: number;

  today: Date = new Date();

  constructor() { }

  ngOnInit() {
    this.dashboardName  = 'Survey Dashboard';
  }

  changeTitle() {
    this.dashboardName = "Title Changed";
  }

  onSayNameFromChild(value: number) {
    this.countFromChild = value;
    console.log(value + 'count for Name said by child' );
  }

}
