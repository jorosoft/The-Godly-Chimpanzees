import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  items = [
    { name: 'Animals', icon: 'face', path: 'animals/all' },
    { name: 'Tickets', icon: 'account_balance_wallet', path: 'activities' },
    { name: 'Membership', icon: 'account_box', path: 'home' },
    { name: 'Donate', icon: 'group_work', path: 'home' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
