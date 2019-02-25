import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StaffService} from '../../services/staff/staff.service';
import swal from 'sweetalert2';

@Component({
    selector: 'app-staff-registry',
    templateUrl: './staff-registry.component.html',
    styleUrls: ['./staff-registry.component.css']
})
export class StaffRegistryComponent implements OnInit {
    staff = {
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
        password: '',
        passwordConfirmation: ''
    };
    err: any;
    countries: string;

    constructor(private staffService: StaffService, public router: Router) {
        this.staffService.getCountries()
            .subscribe(countries => {
                this.countries = countries;
            });
    }

    ngOnInit() {
    }

    onSubmit() {
        this.staffService.addStaff(this.staff)
            .subscribe(
                delegate => {
                    swal({
                        type: 'success',
                        title: 'Ya casi...',
                        text: 'Cuando la informacion sea validada se le enviará un correo ',
                        confirmButtonColor: '#3085d6',
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

}
