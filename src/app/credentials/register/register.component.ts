import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {DelegateService} from '../../services/delegate/delegate.service';
import {DelegationService} from '../../services/delegation/delegation.service';
import {CookiesService} from '../../services/cookies/cookies.service';
import {TranslateService} from '@ngx-translate/core';
import swal from 'sweetalert2';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    delegate = {
        name: '',
        lastName: '',
        email: '',
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
        contactPhone: '',
        numberMun: '',
        committee1: '',
        committee2: '',
        committee3: '',
        code: ''
    };

    selected: boolean;
    institutionName: string;
    err: any;
    countries: string;

    constructor(private delegateService: DelegateService, private delegationService: DelegationService, private translate: TranslateService, private cookiesService: CookiesService, private router: Router) {
        // translate.setDefaultLang(cookiesService.getCookie('lang'));
        translate.setDefaultLang(cookiesService.getCookie('es'));
        this.translate.use('es');
        this.delegateService.getCountries()
            .subscribe(countries => {
                this.countries = countries;
            });

        // if (cookiesService.getCookie('lang') === 'es') {
        //     swal({
        //         type: 'warning',
        //         title: 'Ten en cuenta',
        //         text: 'Si haces parte de una delegación, primero genera el código o preguntale a tu head delegate por este.'
        //     });
        // } else {
        //     swal({
        //              type: 'warning',
        //              title: 'Watch out',
        //              text: 'If you are part of a delegation, first generate the code or ask your head delegate for this'
        //          });
        // }
        swal({
            type: 'warning',
            title: 'Ten en cuenta',
            text: 'Si haces parte de una delegación, primero genera el código o preguntale a tu head delegate por este.'
        });
    }

    ngOnInit() {
    }

    onSubmit() {
        this.delegateService.addDelegate(this.delegate)
            .subscribe(
                delegate => {
                    swal({
                        type: 'success',
                        title: 'Bienvenido a MUNUM',
                        text: 'En los siguientes dias le llegará un correo con la información de pago',
                        confirmButtonColor: '##d33',
                    }).then((value) => {
                        this.router.navigate(['land']);
                    });
                },
                err => {
                    swal({
                        type: 'error',
                        title: 'Oops...',
                        text: err.json().message,
                        confirmButtonColor: '#d33',
                    });
                });
    }

    showSelected() {
        this.selected = !this.selected;
    }

    findIntitutionCode() {
        this.delegationService.findDelegationCode(this.delegate).subscribe(
            institutionCodeRes => {
                if (institutionCodeRes === null) {
                    swal({
                        type: 'error',
                        title: 'Oops...',
                        text: 'El código no se encutra en nuestra base de datos, verifiqa o manda un correo a prensa.munum@gmail.com',
                        confirmButtonColor: '#d33',
                    });
                }
                this.institutionName = institutionCodeRes.institutionName;
            },
            err => {
                swal({
                    type: 'error',
                    title: 'Oops...',
                    text: err.json().message,
                    confirmButtonColor: '#d33',
                });
            });
    }

    try() {
        swal('Good job!', 'You clicked the button!', 'success');
    }
}
