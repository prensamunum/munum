import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-especializados',
    templateUrl: './especializados.component.html',
    styleUrls: ['../land/land.component.css', './especializados.component.css']
})
export class EspecializadosComponent implements OnInit {

    constructor(private translate: TranslateService) {
        translate.setDefaultLang('es');
    }

    ngOnInit() {
        const elmnt = document.getElementById('especializados');
        elmnt.scrollIntoView();
    }

}
