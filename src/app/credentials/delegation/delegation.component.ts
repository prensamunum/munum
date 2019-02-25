import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {DelegationService} from '../../services/delegation/delegation.service';
import {DelegateService} from '../../services/delegate/delegate.service';
import {isUndefined} from 'util';
import {CookiesService} from '../../services/cookies/cookies.service';
import {TranslateService} from '@ngx-translate/core';
import swal from 'sweetalert2';

@Component({
    selector: 'app-delegation',
    templateUrl: './delegation.component.html',
    styleUrls: ['./delegation.component.css']
})
export class DelegationComponent implements OnInit {
    delegation = {
        institutionType: '',
        institutionName: '',
        delegatesNum: '',
        sponsorName: '',
        sponsorCel: '',
        sponsorEmail: '',
        requires: '',
        code: '',
        birth: '',
        idType: '',
        idNumber: '',
        cellphone: '',
        country: '',
        city: '',
        institution: '',
        degree: '',
        vegetarian: '',
        blood: '',
        insurance: '',
        specialCondition: '',
        contactName: '',
        contactPhone: ''
    };
    err: any;
    code: string;
    hasCode: boolean;
    countries: string;
    constructor(private delegationService: DelegationService, private delegateService: DelegateService, private translate: TranslateService, private cookiesService: CookiesService, public router: Router) {
        /*Idioma*/
        // translate.setDefaultLang(cookiesService.getCookie('lang'));
        translate.setDefaultLang(cookiesService.getCookie('es'));
        this.translate.use('es');

        /*Paises*/
        this.delegateService.getCountries()
            .subscribe(countries => {
                this.countries = countries;
            });
    }

    ngOnInit() {
    }

    onSubmit() {
        this.codeGenerator()
        this.delegation.code = this.code;
        // console.log(this.delegation);
        this.delegationService.addDelegation(this.delegation)
            .subscribe(
                staff => {
                    this.hasCode = true;
                },
                err => {
                    swal({
                        type: 'error',
                        title: 'Oops...',
                        text: err.json().message,
                        confirmButtonColor: '#d33',
                    });
                }
            );
    }

    codeGenerator(): any {
        const dataArray: String[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        let data: String, pos: number, num: number;
        for ( num = 0; num < 7; num++) {
            if (dataArray.hasOwnProperty(num)) {
                pos = Math.floor(Math.random() * (dataArray.length));
                const tem: String = dataArray[pos];
                if (!isUndefined(data)) {
                    data =  `${tem}${data}`;
                } else {
                    data = tem;
                }
            }
        }
        this.code = data.toUpperCase().toString();
    }
}
