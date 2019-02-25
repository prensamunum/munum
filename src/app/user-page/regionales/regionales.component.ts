import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-regionales',
    templateUrl: './regionales.component.html',
    styleUrls: ['../land/land.component.css', './regionales.component.css']
})
export class RegionalesComponent implements OnInit {

    constructor(private translate: TranslateService) {
        translate.setDefaultLang('es');
    }

    ngOnInit() {
        const elmnt = document.getElementById('regionales');
        elmnt.scrollIntoView();
    }

}
