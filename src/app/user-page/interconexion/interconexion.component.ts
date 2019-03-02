import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-interconexion',
    templateUrl: './interconexion.component.html',
    styleUrls: ['../land/land.component.css', './interconexion.component.css']
})
export class InterconexionComponent implements OnInit {

    constructor(private translate: TranslateService) {
        translate.setDefaultLang('es');
    }

    ngOnInit() {
        const elmnt = document.getElementById('onu');
        elmnt.scrollIntoView();
    }

}
