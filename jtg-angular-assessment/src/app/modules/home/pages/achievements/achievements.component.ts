import { Component, OnInit } from '@angular/core';
import { HOME_CONSTANTS } from '../../home-contants';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {

  level1Config: any = HOME_CONSTANTS.ACHIEVEMENT_LEVEL_1_CONFIG;
  level2Config: any = HOME_CONSTANTS.ACHIEVEMENT_LEVEL_2_CONFIG;

  constructor() { }

  ngOnInit(): void {
  }

}
