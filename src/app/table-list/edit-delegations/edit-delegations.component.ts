import {Router, ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core'
import {DelegationService} from '../../services/delegation/delegation.service';
import {DelegateService} from '../../services/delegate/delegate.service';
import {CookiesService} from '../../services/cookies/cookies.service';
import {TranslateService} from '@ngx-translate/core';
import swal from 'sweetalert2';

@Component({
    selector: 'app-edit-delegations',
    templateUrl: './edit-delegations.component.html',
    styleUrls: ['./edit-delegations.component.css']
})
export class EditDelegationsComponent implements OnInit {
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
    delegationToFind = {
        id: ''
    };
    err: any;
    countries: string;
    //
    //
    constructor(private delegationService: DelegationService, private delegateService: DelegateService, private translate: TranslateService, private cookiesService: CookiesService, private activatedRoute: ActivatedRoute,  private router: Router) {
        /*Idioma*/
        translate.setDefaultLang(cookiesService.getCookie('lang'));
        /*Paises*/
        this.delegateService.getCountries()
            .subscribe(countries => {
                this.countries = countries;
            });
        /**/
        this.getStaffParams();
        this.delegationService.findOneDelegation(this.delegationToFind)
            .subscribe(
                staffRes => {
                    console.log(staffRes);
                    this.delegation = staffRes;
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

    getStaffParams() {
        this.activatedRoute.params.subscribe(params => {
            this.delegationToFind.id = params['id'];
        });

    }

    ngOnInit() {
    }

    onSubmit() {
        this.delegationService.updateDelegation(this.delegation)
            .subscribe(
                delegate => {
                    this.router.navigate(['admin/delegations']);
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

}
