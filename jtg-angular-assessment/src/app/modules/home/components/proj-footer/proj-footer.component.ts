import { Component, OnInit } from '@angular/core';
import { HOME_CONSTANTS } from '../../home-contants';

@Component({
  selector: 'app-proj-footer',
  templateUrl: './proj-footer.component.html',
  styleUrls: ['./proj-footer.component.scss']
})
export class ProjFooterComponent implements OnInit {
  levelOneLinks: any = HOME_CONSTANTS.FOOTER_LEVEL1_LINKS;
  levelTwoLinks: any = HOME_CONSTANTS.FOOTER_LEVEL2_LINKS;

  constructor() { }

  ngOnInit(): void {
  }

}
