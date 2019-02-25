import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {StaffService} from '../../services/staff/staff.service';
import swal from 'sweetalert2';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    staff = {
        email: '',
        password: ''
    };
    err: any;

    constructor(private staffService: StaffService, public router: Router) {

    }


    ngOnInit() {

    }

    onSubmit() {
        this.staffService.loginStaff(this.staff)
            .subscribe(
                staff => {
                    this.router.navigate(['admin']);
                },
                err => {
                    swal({
                        type: 'error',
                        title: 'Oops...',
                        text: err.json().message,
                        confirmButtonColor: '##d33',
                    });
                }
            );
    }

}
