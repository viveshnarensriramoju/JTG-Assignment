import { Component, OnInit } from '@angular/core';
import { HOME_CONSTANTS } from '../../home-contants';

@Component({
  selector: 'app-proj-navbar',
  templateUrl: './proj-navbar.component.html',
  styleUrls: ['./proj-navbar.component.scss']
})
export class ProjNavbarComponent implements OnInit {

  navbarConfig: any = HOME_CONSTANTS.NAVBAR_MENU_BUTTONS;

  constructor() { }

  ngOnInit(): void {
  }

}
