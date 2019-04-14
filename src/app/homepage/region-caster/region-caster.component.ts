import { Component, OnInit } from '@angular/core';
import { Article } from './../../models/article.model';

@Component({
  selector: 'app-region-caster',
  templateUrl: './region-caster.component.html',
  styleUrls: ['./region-caster.component.scss']
})
export class RegionCasterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  articles: Article[] = [
    new Article("Storm Off the East Coast Has Undergone Bombogenesis", "An areaof low pressure has rapidly strengthened off the East Coast and become a bomb cyclone.", "https://weather.com/forecast/regional/news/2019-04-01-northeast-storm-rain-wind-april-bomb-cyclone?cm_ven=wu_videos?cm_ven=hp-slot-1", 1),
    new Article("Billion-Dollar FLood", "Weeks of heavy rain and flooding in Iran have taken at least 62 lives.", "https://www.wunderground.com/cat6/Record-Floods-Iran-Kill-62-Cause-Over-1-Billion-Damage", 2),
    new Article("Severe Threat Update: Multi-Day, Multi-State", "A few tornadoes are possible.", "https://weather.com/storms/severe/news/2019-04-01-severe-thunderstorms-forecast-south-plains-mississippi-valley?cm_ven=wu_videos?cm_ven=hp-slot-3", 3)
  ]
}
