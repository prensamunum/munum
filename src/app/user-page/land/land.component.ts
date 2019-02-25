import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {CookiesService} from '../../services/cookies/cookies.service';
import {Router} from '@angular/router';
import swal from 'sweetalert2';

@Component({
    selector: 'app-land',
    templateUrl: './land2.component.html',
    styleUrls: ['./land.component.css', '../crisis/crisis.component.css']
})
export class LandComponent implements OnInit {
    sum: number = 0;
    click1: any;
    click2: any;
    final: number = 0;

    constructor(private translate: TranslateService, private cookiesService: CookiesService, private router: Router) {
        // translate.setDefaultLang(cookiesService.getCookie('lang'));
        translate.setDefaultLang(cookiesService.getCookie('es'));
        this.translate.use('es');
        // const lang = this.cookiesService.getCookie('lang');
        // this.translate.use(lang);
    }

    ngOnInit() {
        if (this.router.url == '/land') {

            const countDownDate: any = new Date('May 31, 2019 08:00:00').getTime();

            const x: any = setInterval(function () {

                // Get todays date and time
                const now: any = new Date().getTime();

                // Find the distance between now an the count down date
                const distance: number = countDownDate - now;

                // Time calculations for days, hours, minutes and seconds
                const days: number = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours: number = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes: number = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds: number = Math.floor((distance % (1000 * 60)) / 1000);

                // Output the result in an element with id="demo"
                document.getElementById('Countdown').innerHTML = days + 'd ' + hours + 'h '
                    + minutes + 'm ' + seconds + 's ';

                // If the count down is over, write some text
                if (distance < 0) {
                    clearInterval(x);
                    document.getElementById('Countdown').innerHTML = 'Listo para MUNUM';
                }
            }, 1000);
        }
    }
}
