import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {CookiesService} from '../../services/cookies/cookies.service';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
     constructor(private translate: TranslateService, private cookiesService: CookiesService ) {
     ///constructor(private cookiesService: CookiesService ) {
        translate.setDefaultLang('es');
        cookiesService.setCookie('lang', 'es', 2);
    }

    switchLanguage(language: string) {
        this.translate.use(language);
        this.cookiesService.setCookie('lang', language, 2);
    }

    ngOnInit() {
    }

}
