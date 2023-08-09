import { Component, OnInit } from '@angular/core';
import { HOME_CONSTANTS } from '../../home-contants';

@Component({
  selector: 'app-tailor-made-features',
  templateUrl: './tailor-made-features.component.html',
  styleUrls: ['./tailor-made-features.component.scss']
})
export class TailorMadeFeaturesComponent implements OnInit {

  level1CardsConfig: any = HOME_CONSTANTS.TAILOR_MADE_LEVEL_1_CONFIG;
  level2CardsConfig: any = HOME_CONSTANTS.TAILOR_MADE_LEVEL_2_CONFIG;


  constructor() { }

  ngOnInit(): void {
  }

}
