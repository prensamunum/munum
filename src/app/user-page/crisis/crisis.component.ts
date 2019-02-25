import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-crisis',
  templateUrl: './crisis.component.html',
  styleUrls: ['../land/land.component.css', './crisis.component.css']
})
export class CrisisComponent implements OnInit {

  constructor(private translate: TranslateService) {
      translate.setDefaultLang('es');
  }

  ngOnInit() {
      const elmnt = document.getElementById('crisis');
      elmnt.scrollIntoView();
  }

}
