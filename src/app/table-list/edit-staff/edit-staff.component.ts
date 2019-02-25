import {Router, ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {StaffService} from '../../services/staff/staff.service';
import swal from 'sweetalert2';


@Component({
    selector: 'app-edit-staff',
    templateUrl: './edit-staff.component.html',
    styleUrls: ['./edit-staff.component.css']
})
export class EditStaffComponent implements OnInit {
    oneStaff = {
        _id: '',
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
        passwordConfirmation: '',
        role: ''
    };
    err: any;
    staffToFind = {
        id: ''
    };

    constructor(private staffService: StaffService, private router: Router, private activatedRoute: ActivatedRoute) {
        this.getStaffParams();
        this.staffService.findOneStaff(this.staffToFind)
            .subscribe(
                staffRes => {
                    console.log(staffRes);
                    this.oneStaff = staffRes;
                },
                err => {
                    console.log(err);
                });
    }

    getStaffParams() {
        this.activatedRoute.params.subscribe(params => {
            this.staffToFind.id = params['id'];
        });

    }

    ngOnInit() {
    }

    onSubmit() {
        this.staffService.updateStaff(this.oneStaff)
            .subscribe(
                delegate => {
                    this.router.navigate(['admin/staff']);
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
