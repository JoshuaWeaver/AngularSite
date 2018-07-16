import { Component, OnInit } from '@angular/core';
import { NavItem } from '../NavItem';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  navItems: NavItem[] = [
    {label:"Home", url:""},
    {label:"Calendar", url:"/calendar"}
  ];
  constructor() { }

  ngOnInit() {
  }

}
