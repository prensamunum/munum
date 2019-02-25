import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-onu',
    templateUrl: './onu.component.html',
    styleUrls: ['../land/land.component.css', './onu.component.css']
})
export class OnuComponent implements OnInit {

    constructor(private translate: TranslateService) {
        translate.setDefaultLang('es');
    }

    ngOnInit() {
        const elmnt = document.getElementById('onu');
        elmnt.scrollIntoView();
    }

}
